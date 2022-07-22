# repeat yourself
def repeat(string, num_of_times)
  num_of_times.times { puts string }
end

repeat('Hello', 3)

#2 odd
def is_odd?(number)
  number.abs.odd?
end

p is_odd?(-1)

#3 list of digits
def digit_list(number)
  number.to_s.chars.map { |digit| digit.to_i }
end

p digit_list(12345)

#4 how many
vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'
]

def count_occurrences(arr)
  arr.uniq.each do |element|
    puts "#{element} => #{arr.count(element)}"
  end
end

def count_occurrences2(arr)
  new_arr = arr.map(&:downcase)
  new_arr.uniq.each do |element|
    puts "#{element} => #{new_arr.count(element)}"
  end
end

count_occurrences(vehicles)

count_occurrences2(vehicles)

#5 reverse it p1
def reverse_sentence(sentence)
  if sentence.split.empty?
    ''
  else
    sentence.split.reverse.join(' ')
  end
end

puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == '' # Any number of spaces results in ''

#6 reverse it p2
def reverse_words(sentence)
  new_array = sentence.split.map do |word|
                if word.length >= 5
                  word.reverse
                else
                  word
                end
              end
  new_array.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS

#7 stringy string
def stringy(num, start = 1)
  n = 1
  str = ''
  loop do
    if n.odd?
      str << (start == 0 ? '0' : '1')
    else
      str << (start == 0 ? '1' : '0')
    end
  break if n == num
  n += 1
  end
  str
end

puts stringy(6, 0)
puts stringy(9)
puts stringy(4, 0)
puts stringy(7)

# array average
def average(arr)
  arr.sum.to_f / arr.size.to_f
end

puts average([1, 6])
puts average([1, 5, 87, 45, 8, 8])
puts average([9, 47, 23, 95, 16, 52])

# sum of digits
def sum(input)
  input.to_s.chars.map(&:to_i).inject(:+)
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

#what's my bonus
def calculate_bonus(salary, eligible)
  eligible ? (salary/2) : 0
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000

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
