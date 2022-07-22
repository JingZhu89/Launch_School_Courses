
# Sum of Sums
def sum_of_sums(arr)
  n = 1
  sum = 0
  while n <= arr.size
    sum += arr.slice(0, n).sum
    n += 1
  end
  sum
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35

# madlibs
print 'Enter a noun: '
noun = gets.chomp

print 'Enter a verb: '
verb = gets.chomp

print 'Enter an adjective: '
adjective = gets.chomp

print 'Enter an adverb: '
adverb = gets.chomp

sentence_1 = "Do you #{verb} your #{adjective} #{noun} #{adverb}? That's hilarious!"
sentence_2 = "The #{adjective} #{noun} #{verb}s #{adverb} over the lazy dog."
sentence_3 = "The #{noun} #{adverb} #{verb}s up #{adjective} Joe's turtle."

puts [sentence_1, sentence_2, sentence_3].sample

# Leading Substrings
def leading_substrings(str)
  n = 0
  result = []
  while n < str.length
    result << str[0..n]
    n += 1
  end
  result
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# All Substrings
def substrings(str)
  result = []
  loop do
  result.concat(leading_substrings(str))
  break if str.length == 1
  str = str [1..-1]
  end
  result
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

# Palindromic Substrings
def palindromes(str)
  result = []
  all_substrings = substrings(str)
  all_substrings.each{|substring| result << substring if palindorme?(substring)}
  result
end

def palindorme?(str)
  str == str.reverse && str.length > 1
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]

#fizbuzz
def fizzbuzz(num1, num2)
  num_arr = (num1..num2).to_a
  new_arr = []
  num_arr.each do |num|
    if num % 15 == 0
      new_arr << "FizzBuzz"
    elsif num % 5 == 0
      new_arr << "Buzz"
    elsif num % 3 == 0
      new_arr << "Fizz"
    else
      new_arr << num
    end
  end
  puts new_arr.join(", ")
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz



# Double Char (Part 1)
def repeater(str)
  new_str = ''
  str.each_char { |char| 2.times{ new_str << char} }
  new_str
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''

# Double Char (Part 2)
def double_consonants(str)
  new_str = ''
  str.each_char do |char| 
    if char =~ /[a-zA-Z]/ && 'aeiou'.count(char.downcase) == 0
      new_str << char << char
    else 
      new_str << char
    end
  end
  new_str
end

p double_consonants('String') 
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""

# Reverse the Digits In a Number
def reversed_number(num)
  num.to_s.reverse.to_i
end

p reversed_number(12345) == 54321
p reversed_number(12213) == 31221
p reversed_number(456) == 654
p reversed_number(12000) == 21 # No leading zeros in return value!
p reversed_number(12003) == 30021
p reversed_number(1) == 1

# Get The Middle Character
def center_of(str)
  length = str.length
  mid = (length.to_f/2).ceil
  case 
  when length.odd?
    str[(mid - 1)..(mid - 1)]
  when length.even?
    str[(mid - 1)..mid]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'
