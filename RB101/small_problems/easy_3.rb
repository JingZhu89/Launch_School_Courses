# Searching 101
def ask_for_input(ct)
  case ct%10
  when 1
  puts "Enter the #{ct}st number:"
  when 2
  puts "Enter the #{ct}nd number:"
  when 3
  puts "Enter the #{ct}rd number:"
  else
  puts "Enter the #{ct}th number:"
  end
end

arr = []
5.times do |index|
  ask_for_input(index + 1)
  arr << gets.chomp.to_i
end

puts "enter the last number"
last_number = gets.chomp.to_i
if arr.include?(last_number)
  puts "The number #{last_number} appears in #{arr}."
else
  puts "The number #{last_number} does not appear in #{arr}."
end

# arithmetic integer
puts "==>> Enter the first number:"
first_num = gets.chomp.to_i
puts "==>> Enter the second number:"
second_num = gets.chomp.to_i

puts "==> #{first_num} + #{second_num} = #{first_num + second_num}  "

# Counting the Number of Characters
puts "Please write word or multiple words"
input = gets.chomp
input.chars
number_of_char = input.chars.count {|char| char != ' ' }
puts "There are #{number_of_char} characters in #{input}" 


# multiplying two numbers
def multiply(n, m)
  n * m
end

p multiply([5, 3], 3)

# Squaring an Argument
def square(n)
  multiply(n,n)
end

def xor?(n, m)
 if [!!n, !!m].count{|element| element == true} == 1
  true
 else 
  false
 end
end

p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false

# odd list
def oddities(arr)
  n = 0
  new_arr = []
  while n < arr.size
    new_arr << arr[n] if (n.even? || n == 0)
    n +=1
  end
  new_arr
end

p oddities([2, 3, 4, 5, 6]) 
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []

# palindromic string 1
def palindrome?(str)
 str == str.reverse
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true

# palindromic string 2
def real_palindrome?(str)
  alphanumerics = Array('0'..'9') + Array('a'..'z')
  new_str = str.downcase.chars.select { |n| alphanumerics.include?(n) }.join
  new_str == new_str.reverse
end

p real_palindrome?('madam') == true
p real_palindrome?('Madam') == true           # (case does not matter)
p real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
p real_palindrome?('356653') == true
p real_palindrome?('356a653') == true
p real_palindrome?('123ab321') == false

# palindromic numbers
def palindromic_numbers?(num)
  num.to_s == num.to_s.reverse
end