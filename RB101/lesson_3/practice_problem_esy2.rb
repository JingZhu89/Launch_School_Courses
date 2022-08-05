#Q1
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts ages.key?("Spot")
puts ages.include?("Spot")

#Q2
munsters_description = "The Munsters are creepy in a good way."
puts munsters_description.swapcase!
puts munsters_description.capitalize!
puts munsters_description.downcase!
puts munsters_description.upcase!

#Q3
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
additional_ages = { "Marilyn" => 22, "Spot" => 237 }
ages.merge!(additional_ages)
puts ages

#Q4
advice = "Few things in life are as important as house training your pet dinosaur."
puts advice.include?("Dino")

#Q5
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p flintstones

#Q6
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
flintstones << "Dino"
p flintstones

#Q7
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
flintstones << "Dino" << "Hoppy"
p flintstones

#Q8
advice = "Few things in life are as important as house training your pet dinosaur."
puts advice.slice!(0, advice.index("house"))
puts advice

#Q9
statement = "The Flintstones Rock!"
puts statement.count("t")

#Q10
title = "Flintstone Family Members"
puts title.center(40)
    