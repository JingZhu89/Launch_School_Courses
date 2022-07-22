
# how old is teddy
def teddy_age(name)
  age = rand(20..200)
  puts "#{name} is #{age} years old!"
end

teddy_age('Teddy')

# how big is the room
puts "Enter the length of the room in meters:"
length = gets.chomp.to_f
puts "Enter the width of the room in meters:"
width = gets.chomp.to_f
area_m = (length * width).round(2)
area_f = (area_m * 10.7639).round(2)

puts "The area of the room is #{area_m} square meters (#{area_f} square feet)."

puts "What is the bill?"
bill = gets.chomp.to_f
puts "What is the tip percentage?" 
tip_percentage = gets.chomp.to_f

tip = bill * tip_percentage / 100
total = tip + bill

puts "The tip is $#{sprintf('%.2f', tip)}"
puts "The total is $#{sprintf('%.2f', total)}"

# when will I retire
puts "What is your age?"
age = gets.chomp.to_i
puts "At what age would you like to retire?"
retire_age = gets.chomp.to_i
yr = Time.now.year
yrs_to_retire = retire_age - age
retire_yr = yr + yrs_to_retire
puts "It's #{yr}. You will retire in #{retire_yr}"
puts "You have only #{yrs_to_retire} years of work to go!"

# Greeting a user
puts "What is your name?"
name = gets.chomp
if name.end_with?('!')
  name = name.chop!
  puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING"
else
  puts "Hello #{name}."
end

#odd numbers
99.times {|index| puts index if index.odd?}

Array(1..99).select {|num| num.odd?}.each{|n| puts n}

#even numbers
99.times {|index| puts index if (index.even? && index != 0)}

#sum or product of conecutive integers
puts ">> Please enter an integer greater than 0:"
num = gets.chomp.to_i
puts ">> Enter 's' to compute the sum, 'p' to compute the product."
cal = gets.chomp
arr = Array(1..num)

case cal
when 's'
  sum = arr.inject(:+)
  puts "The sum of the integers between 1 and #{num} is #{sum}."
when 'p'
  product = arr.inject(:*)
  puts "The sum of the integers between 1 and #{num} is #{product}."
end

#mutation
array1 = %w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
array1.each_with_index { |value, index| array1[index] = value.upcase if value.start_with?('C', 'S') }
puts array2
puts array1
