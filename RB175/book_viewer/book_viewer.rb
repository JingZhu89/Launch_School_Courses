require "tilt/erubis"
require "sinatra"
require "sinatra/reloader"

before do
  @contents = File.readlines("data/toc.txt")
end


get "/" do
  @title = "The Adventure of Sherlock Holmes"

  erb :home
end

get "/chapters/:number" do
  number = params[:number].to_i
  redirect "/" unless (1..@contents.size).cover? number
  chapter_name = @contents[number - 1]
  @chapter = File.read("data/chp#{number}.txt")
  @title = "Chapter #{number}: #{chapter_name}"
  erb :chapter
end

get "/search" do
  if params[:query]
    @results = chapter_search(params[:query])
  else
    @results = {}
  end
  erb :search
end

not_found do
  redirect "/"
end

helpers do
  def slugify(text)
    text.downcase.gsub(/\s+/, "-").gsub(/[^\w-]/, "")
  end

  def in_paragraph(text)
    text.split("\n\n").each_with_index.map do |line, index|
      "<p id=paragraph#{index}>#{line}</p>"
    end.join
  end

  def chapter_search(text)
    result = {}
    @files = Dir.glob("data/chp*.txt").sort
    @files.each do |file|
      chp_content = File.read(file).split("\n\n")
      chapter_number = chp_num(file)
      chapter_title = chp_title(file)
      chp_content.each_with_index do |paragraph, index|
        if paragraph.include?(text) && !result[{:chapter_number => chapter_number,:chapter_title => chapter_title}] 
          result[{:chapter_number => chapter_number,:chapter_title => chapter_title}] = {"paragraph#{index}" => paragraph}
        elsif paragraph.include?(text) && result[{:chapter_number => chapter_number,:chapter_title => chapter_title}] 
          result[{:chapter_number => chapter_number,:chapter_title => chapter_title}] ["paragraph#{index}"] = paragraph
        end
      end
    end
    result
  end

  def chp_title(file_name)
    index = chp_num(file_name).to_i - 1
    @contents[index].gsub("\n","")
  end

  def chp_num(file_name)
    file_name.scan(/\d+/)[0]
  end
end
