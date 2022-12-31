# cms.rb
require "sinatra"
require "sinatra/reloader"
require "redcarpet"
require "yaml"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def load_file_content(path)
  content = File.read(path)
  case File.extname(path)
  when ".txt"
    headers["Content-Type"] = "text/plain"
    content
  when ".md"
    erb render_markdown(content)
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load_file(credentials_path)
end

def unauthorize_redierct
  if !session[:username]
    session[:message] = "You must be signed in to do that."
    redirect "/"
  end
end

get "/users/signin" do
  erb :signin
end

get "/" do
  pattern = File.join(data_path, "*")
  @files = Dir.glob(pattern).map{|file| File.basename(file)}
  erb :index
end

get "/new" do
  unauthorize_redierct
  erb :new
end

get "/:filename" do
  file_path = File.join(data_path, params[:filename])

  if File.file?(file_path)
    load_file_content(file_path)
  else
    session[:message]="#{params[:filename]} does not exist"
    redirect "/"
  end
end

get "/:filename/edit" do
  unauthorize_redierct
  file_path = File.join(data_path, params[:filename])

  @filename = params[:filename]
  @content = File.read(file_path)

  erb :edit
end

post "/:filename/delete" do
  unauthorize_redierct
  file_path = File.join(data_path, params[:filename])
  File.delete(file_path)

  session[:message]= "#{params[:filename]} has been deleted"

  redirect "/"
end

post "/create" do
  unauthorize_redierct
  new_filename = params[:new_document].to_s.strip

  if new_filename.size == 0
    session[:message] = "A name is required."
    status 422
    erb :new
  else
    file_path = File.join(data_path, new_filename)

    File.write(file_path,"")
    session[:message] = "#{new_filename} has been created."

    redirect "/"  
  end
end

post "/:filename" do
  unauthorize_redierct
  file_path = File.join(data_path, params[:filename])

  File.write(file_path, params[:new_content])
  
  session[:message] = "#{params[:filename]} has been updated."
  redirect "/"
end

post "/users/signin" do
  username = params[:username]
  password = params[:password]
  userinfo = load_user_credentials
  
  if username == "admin" && password == "secret"
    session[:username] = "admin"
    session[:message] = "Welcome!"
    redirect "/"
  elsif userinfo[:username] = password
    session[:username] = username
    redirect "/"
  else
    session[:message] = "Invalid credentials"
    status 422
    erb :signin
  end
end

post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."
  redirect "/"
end