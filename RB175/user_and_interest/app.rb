require "tilt/erubis"
require "sinatra"
require "sinatra/reloader"
require 'yaml'

before do
  @userinfo = YAML.load_file("data/users.yaml")
  @user_names = @userinfo.keys.map{|name| name.to_s}
  @number_of_users = @user_names.size
  @number_of_interests = 0 
  @userinfo.each do |_, value|
    @number_of_interests += value[:interests].size
  end
end


get "/" do
  redirect "/users"
end

get "/users" do
  @title = "Users"

  erb :users
end

get "/users/:name" do
  @user_name = params[:name].downcase
  @title = @user_name.capitalize
  name = @user_name.to_sym
  @user_email = @userinfo[name][:email]
  @user_interests = @userinfo[name][:interests].join(", ")
  @other_users = @user_names - [@user_name]

  erb :user
end



