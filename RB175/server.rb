require "socket"

def parse_request(request_line)
  http_method, path_and_qry_str, http = request_line.split(" ")
  path, qry_str = path_and_qry_str.split("?")
  queries = (qry_str || "").split("&").map {|qry| qry.split("=")}
  params = queries.each_with_object({}) do |item, hash|
    hash[item[0]] = item[1]
  end

  [http_method, path, params]
end

server = TCPServer.new("localhost", 3003)
loop do
  client = server.accept
  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line
  
  http_method, path, params = parse_request(request_line)

  number = params["number"].to_i
  
  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/html"
  client.puts
  client.puts "<html>"
  client.puts "<body>"
  client.puts "<pre>"
  client.puts http_method
  client.puts path
  client.puts params
  client.puts "</pre>"

  client.puts "<h1>Counter</h1>"
  
  client.puts "<p>The current number is #{number}.</p>"
  client.puts "<a href='?number=#{number + 1}'>Add One</a>"
  client.puts "<a href='?number=#{number - 1}'>Subtract One</a>"
  client.puts "</body>"
  client.puts "</html>"

  client.close
end