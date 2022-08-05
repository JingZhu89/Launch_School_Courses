#1
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
flintstones_hash = {}
flintstones.each_with_index do |name, index|
  flintstones_hash[name.to_sym] = index
end
flintstones = flintstones_hash
p flintstones

#2
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
sum = 0
ages.each_value { |value| sum += value }

puts sum

#3
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
ages.delete_if { |_,value| value > 100 }
p ages

#4
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
min_age = ages.values.min()
puts min_age

#5
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts flintstones.index { |name| name[0, 2] == 'Be' }

#6
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
flintstones.map! { |name| name[0, 3] }
p flintstones

#7
statement = "The Flintstones Rock"
letters = statement.split("").uniq
new_hash = {}

letters.each do |letter|
  if letter != " "
    new_hash[letter.to_sym] = statement.count(letter)
  end
end

p new_hash

#8
words = "the flintstones rock"
words = words.split.map {|word| word.capitalize!}.join(" ")
puts words

#9
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each_value do |hash|
  case hash["age"]
  when 0..17 
    hash["age_group"] = "kid"
  when 17..64 
    hash["age_group"] = "adult"
  else 
    hash["age_group"] = "senior"
  end
end

p munsters

