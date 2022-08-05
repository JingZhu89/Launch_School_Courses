#Q3
advice = "Few things in life are as important as house training your pet dinosaur."
advice.gsub!('important', 'urgent')
puts advice

#Q4
puts (10..100).cover?(49)

#Q5
famous_words = "seven years ago..."
one_way = "Four score and " + famous_words
puts one_way
or_another = "Four score and " << famous_words
puts or_another

#Q6
flintstones = ["Fred", "Wilma"]
flintstones << ["Barney", "Betty"]
flintstones << ["BamBam", "Pebbles"]
p flintstones.flatten!

#Q7
flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
p flintstones.assoc("Barney")

