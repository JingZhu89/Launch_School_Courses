require "tilt/erubis"
require "sinatra"
require "sinatra/reloader"


get "/" do
  @files = Dir.glob("public/*").map{|file| File.basename(file)}.sort
  @files.reverse! if params[:sort] == 'desc'
  puts @files
  erb :file_list

end