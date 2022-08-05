
str = 'baab'
# take a string as argument
# find all possible sub strings
  # emty arr
  # take the string as input
  # iterate through each index of the string (starting index) 
   # and then iterate through all the index after the starting index to find all substrings
   # push to emty array
# for each substring, check if an integer * substring == string , integer == str.size/substring.size. can exclude substring that % !=n 0 and exclude substrint == string
# return boolean value
  # true if the string is completely made of repeating substrings
  # false if it's not



def substrings(str)
  substrings = []
  str_length = str.length
  0.upto(str_length - 1) do |index|
    sub_str_length = 1
    until sub_str_length > str_length - index do
      substrings << str.slice(index, sub_str_length)
      sub_str_length += 1
    end
  end
  substrings.uniq
end

def possible_length_substring(substrings_arr, str)
  substrings_arr.select do |substring|
    if str.length % substring.length == 0 and str.length != substring.length
      true
    else
      false
    end
  end
end

def repeated_substring_pattern(str)
  all_substrings = substrings(str) 
  possible_length_substrings = possible_length_substring(all_substrings, str)
  possible_length_substrings.each do |substring|
    number_of_repeats = str.length / substring.length
    if substring * number_of_repeats == str
      return true
    end
  end
  false
end


p repeated_substring_pattern(str)

words = ['bella', 'label', 'roller', 'llea']
# take the first element from the array and break it to an array of uniq letters
# for each letter, count the number of times they each appeard in each word of the original array and create a sub array {a: [1, 3, 4], b: [2,4,5]}
# result array , each letter is repeated for the min num times in the count arrays

def letters(words)
  shortest_word = words.sort_by{|word| word.length}
  shortest_word[0].chars.uniq
end

def letter_counts(letters, words)
  letter_counts = {}
  letters.each do |letter|
    words.each do |word|
      if !letter_counts[letter] || letter_counts[letter] > word.count(letter)
        letter_counts[letter] = word.count(letter) 
      end
    end
  end
  letter_counts
end

def result_arr(words)
  letters = letters(words)
  letter_counts = letter_counts(letters, words)
  p letter_counts
  result_arr = []
  letter_counts.each do |letter, count|
      count.times {result_arr << letter}
  end
  result_arr
end

p result_arr(words)



# 2017 - 2071 - 2170
# integer to string to array
# swap the next digit with the smallest bigger number available (from the digits on the right) .. next digit
require 'pry'
a = 12345
def next_bigger_num(num)
  digits_arr = num.to_s.chars
  num_of_digits = digits_arr.size
  (num_of_digits - 2).downto(0) do |swap_from_index|
    (num_of_digits - 1).downto(swap_from_index) do |swap_to_index|
      if digits_arr[swap_to_index] > digits_arr[swap_from_index]
         digits_arr[swap_to_index], digits_arr[swap_from_index] = digits_arr[swap_from_index], digits_arr[swap_to_index]
         return digits_arr.join.to_i
      end
    end
  end
  -1
end

p next_bigger_num(a)
p next_bigger_num(next_bigger_num(a))
p next_bigger_num(next_bigger_num(next_bigger_num(a)))

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# input array
# output integer
# iterate through the array and find subararys
 # - starting from index 0 arr[0..1] arr[0..2] .... arr[0..9]
# keep sum the current subarray in a variable and reassign assign the value when finding a bigger number

def max_squence(arr)
  last_index = arr.size - 1
  max_sum = 0
  0.upto(last_index) do |starting_index|
    starting_index.upto(last_index) do |ending_index|
      sum_of_sub_array = arr[starting_index..ending_index].sum
      if sum_of_sub_array > max_sum
        max_sum = sum_of_sub_array
      end
    end
  end
  [max_sum, 0].max
end

p max_squence(arr)

# input arr of strings
# out put would be a substring that each element of the arr has and the substring has to start from str[0]
# find the shortest string in the arr
# find all the substrings in this arr that starts with str[0]
# check if all the other elements in the array has this string as well. but it cannot be in the middle


arr = ['little', 'alitt', 'littttttttttttle']


def common_prefix(arr)
  prefix = ''
  index = 0
  loop do 
    checking_letter = arr[0][index]
    matching = true
    arr.each do |element|
      if element[index] != checking_letter
        matching = false
        break
      end
    end
    break if index == arr[0].size - 1 || matching == false
    prefix << checking_letter
    index += 1
    
  end
  prefix
end

p common_prefix(arr)


# input two strings
# first find the shorter word
# iterate through the string to find substrings and check if it exist in the longer word, if so break and return true
# if no substring match is found, return false

def shorter_str(str1, str2)
  str1.length > str2.length ? str2 : str1
end

def substring_test(str1, str2)
  shorter_str = shorter_str(str1, str2).downcase
  longer_str = ([str1, str2] - [shorter_str])[0].downcase

  starting_index = 0
  while starting_index < shorter_str.length - 1
    ending_index = 1
    while ending_index < shorter_str.length
      sub_arr = shorter_str[starting_index..ending_index]
      if longer_str.include?(sub_arr)
        return true
      end
    ending_index += 1
    end
    starting_index += 1
  end
  false
end


p substring_test('somthing', 'home')

# input two strings
# str1 has all the characters in str2 and enough number of each character
# find all the characters and their ct in str2
# check if str1 has the character with at least the same ct
# output true / false

def letter_count(str2)
  uniq_letters = str2.chars.uniq
  uniq_letters.map{|letter| [letter, str2.chars.count(letter)]}
end

p letter_count('apple')

def scramble(str1, str2)
  str2_letter_count = letter_count(str2)
  str2_letter_count.each do |letter, count|
    if str1.count(letter) < count
      return false
    end
  end
  true
end


p scramble('applaaalllll', 'apple')



# find all substrinsg in the string
# select the palindromes
# length of each palindrome and find the max

def substrings(str)
  substrings = []
  0.upto(str.length - 1) do |starting_index|
    (starting_index).upto(str.length - 1) do |ending_index|
      substrings << str[starting_index..ending_index]
    end
  end
  substrings
end

def palindrome?(substr)
  substr == substr.reverse
end

def longest_palindrome(str)
  p substrings = substrings(str)
  p palindromes = substrings.select { |substr| palindrome?(substr) }
  if str == ''
    0
  else
    palindromes.map { |palindrome| palindrome.size }.max
  end

end

p longest_palindrome('abaabbab')

# input is an array
# output is an index(integer)
  #- iterate through each index in this array
  #- calculate [0..index - 1].sum & [index + 1..-1].sum
  # if == return index else return -1

def find_even_index(arr)
  arr.each_with_index do |_, index|
    if index > 0 && arr[0..index - 1].sum == arr[index + 1..-1].sum 
      return index
    elsif arr[1..-1].sum == 0 
      return 0
    end
  end
  -1
end

p find_even_index([0,-80, 10, 10, 15, 35, 20])


# input is an array of numbers
# for each number in the array,
# uniq number array
# cont number numbers smaller
# an array of numbers
def smaller_numbers_than_current(numbers)
  uniq_numbers = numbers.uniq
  numbers.map {|number| uniq_numbers.count{|uniq_number| uniq_number < number}}
end

p smaller_numbers_than_current([1])

# input is an array of integers arr lenghth can be > or < 5
# if the array length is less than 5 return nil
# if the array lengthis more than 5
  #- sum consecutive 5 integers and return the minimum one
    #- iterate through the array unitill the index reaches -4
    #- keep a sum variable. assign it to the lower number 
    #-return the final sum

def minimum_sum(arr)
  size = arr.size
  if size < 5
    return nil
  else
    sum = []
    0.upto(size - 5) do |starting_index|
      ending_index = starting_index + 4
      starting_index
      ending_index
      sum << arr[starting_index..ending_index].sum
    end
    sum.min
  end
end


arr = [-1, -5, -3, 0, -1, 2, -4]
p minimum_sum(arr)



# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.


----------------------------
# input = a string
# convert the string to an array
# iterate through the array and find every third word
 # look at the index, if the index is % 3 == 2
  # - iterate through every third word and find every other character and convert it to uppercase
  #  - word.chars index % 2 == 1 uppercase
  #  - recomibine the chars to a word
# - word
 
rejoin the letters and characters to a string

Q: what about non alph 


def to_weird_case(sentence)
  words = sentence.split
  words.each_with_index do |word, index|
    if index % 3 == 2
      letters = word.chars
      letters.each_with_index do |letter, index|
        if index % 2 == 1
          letter.upcase!
        end
      end
      words[index] = letters.join
    end
  end
  words.join(' ')
end


p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
   'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
   'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# The tests above should print "true".


# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

# Examples:


# The tests above should print "true".

# input array of int
  # iterate through the array start from index 0 end at index arr.size - 2
  # difference (arr[current_index]  - arr[current_index + 1]).abs() 
  # keep track of the arr & difference, if the differnce is samller than the previous difference, replace the arr with new one
# output a pair int in arr


def product(arr)
  new_arr = []
  0.upto(arr.size - 2) do |index1|
    (index1 + 1).upto(arr.size - 1) do |index2|
      new_arr << [arr[index1],arr[index2]]
    end
  end
  new_arr
end

def closest_numbers(arr)
  arr = product(arr)
  min_pair = []
  difference = nil
  arr.each do |num1, num2|
    new_difference = (num1- num2).abs()
    if !difference || difference > new_difference
      difference = new_difference
      min_pair = [num1, num2]
    end
  end
  min_pair
end

p product([1,2,3])

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

# input is a string
# dowcase the string
# split the string in to char (space does not count as char) gsub space then chars
# create a uniq array
# for each letter in the uniq array count number of occurance from the original array & find the min
# return first letter (lowest count)

def least_common_char(str)
  formatted_str = str.downcase
  letters = formatted_str.chars.uniq
  letter_counts = letters.map {|letter| formatted_str.count(letter)}
  letter_counts.each_with_index do |count, index|
    if count == letter_counts.min
      return letters[index]
    end
  end
end


# Examples:

p least_common_char("Hello World") #== "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'

# The tests above should print "true".

def pairs(arr)
  arr.uniq.map {|uniq_num| arr.count(uniq_num) / 2}.sum
end

p pairs([1, 2, 5, 6, 5, 2])

p pairs([])
p pairs([54])


def solve(s)
  s.gsub(/[^aeiou]/i, " ").split.map{|vowles| vowels.count}.max
end

p solve('codewarriors')

def solve(s) 
  sum = 0
  s.chars.each_with_index do |value, index|
    if value.to_i.odd?
      sum += index + 1
    end
  end
  sum
end

p solve('13472315')




def f(s)
  length = s.length
  1.upto(length) do |substr_length|
    substr = s.slice(0, substr_length)
    if s.gsub(substr,'') == ''
      return [substr, length/substr_length]
    end
  end
end

p f('abcd')


def pangram?(string)
  string.gsub(/[^a-z]/i,'').downcase.chars.uniq.sort == ('a'..'z').to_a
end

p pangram?('The quick brown fox jumps over the lazy dog')


# remove every char of s2 from s1, if char doesn't exist in s1 then fasle else true
def scramble(s1,s2)
  letters = s2.chars.uniq
  letters.each do |letter|
    if s1.count(letter) < s2.count(letter)
      return false
    end
  end
  true
end


p scramble('rkqodlw', 'world') 
p scramble('cedewaraaossoqqyt', 'codewars') 
p scramble('katas', 'steak') 


def solution(number)
  (1...number).select {|num| num % 3 == 0 || num % 5 ==0}.sum
# put your solution here
end

p solution(-1)

def greatest_product(n)
  greatest_product = nil
  nums = n.chars.map(&:to_i)
  0.upto(nums.size - 5) do |index|
    p nums[index..index + 4]
    product = nums[index..index + 4].inject(:*)
    if !greatest_product || product > greatest_product
      greatest_product = product
    end
  end
  greatest_product
end

p greatest_product("92494737828244222221111111532909999")


def duplicate_count(text)
  text = text.downcase
  text.chars.uniq.select {|char| text.count(char) > 1}.size  
end

p duplicate_count("abcdeaB")


require 'prime'
def minimum_number(numbers)
  current_sum = numbers.sum
  n = 0
  loop do
    if Prime.prime?(n + current_sum)
      return n
    else
      n += 1
    end
  end
end

p minimum_number([50,39,49,6,17,28])



# input is an array
# iterate through array to find index that satisfy
  # arr[0..index - 1].sum == arr[index + 1..-1].sum
  # index 0 arr[1..-1].sum == 0
  # else -1
# output is an index(integer)
def find_even_index(arr)
  last = arr.size - 1
  if arr.empty?
    return -1
  elsif arr.size == 1
    return 0
  elsif arr[1..last].sum == 0
    return 0
  elsif
    arr.each_with_index do |_, index|
      if arr[0..(index - 1)].sum == arr[(index + 1)..last].sum
        return index
      end
    end
  end
  if arr[0..(last - 1)].sum == 0
    return last
  end
  -1
end

p find_even_index([]) 
p find_even_index([1,2,3,4,3,2,1]) == 3
p find_even_index([1,100,50,-51,1,1])==1
p find_even_index([1,2,3,4,5,6])== -1
p find_even_index([20,10,30,10,10,15,35])==3
p find_even_index([20,10,-80,10,10,15,35])==0
p find_even_index([10,-80,10,10,15,35,20])==6
p find_even_index(Array(1..100))==-1
p find_even_index([0,0,0,0,0]) ==0
p find_even_index([-1,-2,-3,-4,-3,-2,-1])==3
p find_even_index(Array(-100..-1))==-1


def comp(array1, array2)
  if !array2 || !array2
    return false
  else
    array1.map { |num| num * num }.sort == array2.sort
  end
end

p comp(nil, [1])

# input array of integers and a sum number
 # - for each integer check if sum - integer is in the left array
 # - if there is, return that number and the current integer
 # - otherwise goes to the next integer
 # returns nill when no match

# output is an array of two inetgers that sum up to the sum number

def sum_pairs(ints, s)
  uniq_numbers = ints.uniq
  ints.each_with_index do |int, index|
    if uniq_numbers.include(s - int)       
      if ints[0...index].include?(s - int)
        return [s - int, int]
      end
    end
  end
  nil
end

l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

p sum_pairs(l1,5)


def letter_count(str)
  str.chars.uniq.map{|char| [char.to_sym, str.count(char)]}.to_h
end

p letter_count('abcde')



def group_and_count(input)
  input.each_with_object(Hash.new(0)){|num, hsh| hsh[num] += 1}
end

p group_and_count(nil)


# input a string
# each word in a string upcase the even index letters and downcase the odd index letters
# word are separated by spaces, only alphabetical chars
  # - create an array of words split.
  # - iterate through the string to modify each word
  # - iterate through each word to perform the case chaneg


# return a new string


def weirdcase(string)
  string.split.map {|word| format_word(word)}.join(' ')
end


def format_word(word)
  letters = word.chars
  letters.each_with_index do |char, index|
    if index.even?
      char.upcase!
    else
      char.downcase!
    end
  end
  letters.join
end

p format_word('apple')

p weirdcase( "Weird string case" )

# input is a string and number of iterations
# for each iteration
  # - rearrange each char in the string , all odd index char in the front
  # - all even index char in the back
# output is a string 

# input is an integer
# tansfer the integer to binary
# convert that number to a string,
# count the number of 1s
# output is the sum of 1s of the binary format of that integer

# inputr is an integer
# convert to string and chars
# chars to int
# int square
# back to s concatenate
# output is the integer concatenated sqare of each integer in the original num

# input is a string
#   - convert string to an an array of letters
#   - for each letter 
# output is an array of characters with consecutive dups removed


# input is a string of letters
  # mathcing rule: A -> T T->A G->C C->G

# output is matching string of letters

def DNA_strand(dna)
  matching = dna.chars.map do |val|
               case val
                 when 'A' then 'T'
                 when 'T' then 'A'
                 when 'C' then 'G'
                 when 'G' then 'C'
               end
             end
  matching.join
         
end


p DNA_strand('AAAA')


# input is a number (row number)
  # find all the numbers in the row
  # row has n numbers (consecutive odd numbers)
  # the first number in the row 1 3 7 13 21...differene between them are 0 2 4 6 8 -> 2 * (0 + 1 + 2 + 3 + 4) 
      # first number in the nth row by  1 + (0..n).sum * 2 
  # sum fo the nth row (0, 2, 4, 6..) n * first number
# output is a number (sum of all integer in the row)

def row_sum_odd_numbers(n)
  num = 1 + 2 * (0..n-1).to_a.inject(:+)
  num * n + 2 * (0..n-1).to_a.inject(:+)
end

p row_sum_odd_numbers(3)



# input is a string
# convert the string to an array split
  # for each word in the array, 
    # if it letters move the first letter to the back
  # concatenate ay to the end of the word
# join the array
# output a rearranged string

def pig_it text
  new_text = text.split.map do |char|
               if char =~ /[^a-z]/i
                 char
               elsif char.length == 1
                 char + 'ay'
               else
                 char[1..-1] + char [0] + 'ay'
               end
              end
  new_text.join(' ')
end

p pig_it('This is my a string !')


# input is an n * n array
  # loop
  #   pop the first row from the array add each element to the result array in order
  #   pop the last element from the rows in the middle one by one (ascending row number order)
  #   pop the last row and add the elemnt to the result array in reverse order
  #   pop the first element from the rows in the middle one by one (descending row number order)
  # get a new n * n array
  # stop where array is empty
# output is one array with all elements from the original array, rearraged

def snail(array)
  result = []
  loop do
  result = add_first_row(array, result)
  break if array.empty?
  result = add_middle_last(array, result)
  break if array.empty?
  result = add_last_row(array, result)
  break if array.empty?
  result = add_middle_first(array, result)
  break if array.empty?
  end
  result
end

def add_first_row(input, result)
    result = result + input.shift
end

def add_last_row(input, result)
  result = result + input.pop.reverse
end

def add_middle_last(input, result)
  0.upto(input.size - 1) do |index|
    result << input[index].pop
  end
  result
end 

def add_middle_first(input, result)
  (input.size - 1).downto(0) do |index|
    result << input[index].shift
  end
  result
end 

p snail([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]] )


# input is a string and an array of strings
# characters and their count for each character in the string
  # for each string in the array
  # count the num of occurance of each character from the original string
    # if the number is > than the count in the string true go to the next character
    # else false 

# out put is an array of strings from the original array that containe all the characters from the original string

def anagrams(word, words)
  hsh = word.chars.map{|char| [char, word.count(char)]}.to_h
  words.select do |test_word|
    hsh.all? do |key, value|
      test_word.count(key) > value
    end
  end
end

# balance parentheses
# input number of parenthese
  # create an array of ( )
  # find all possible combinations
  # at any point in the string the number of ( on the left is >= ) on the left
# output array of all possible parentheses combination, each element is a string
  # number of ( = n/2 and ) = n/2

require'pry'
  def balanced_parens(n)
    current = {'(' => [1, 0]}
    if n == 0
      return ''
    end
    loop do
      new_current = {}
      add_op_cl = current.select {|_, value| value[0] - value[1] > 0 && value[0] < n}
      add_op_cl.each {|key, value| new_current[key + '('] = [value[0] + 1, value[1]]}
      add_op_cl.each {|key, value| new_current[key + ')'] = [value[0], value[1] + 1]}

      add_cl = current.select {|_, value| value[0] == n}
      add_cl.each {|key, value| new_current[key + ')'] = [value[0], value[1] + 1]}

      add_op = current.select {|_, value| value[0] - value[1] == 0}
      add_op.each {|key, value| new_current[key + '('] = [value[0] + 1, value[1]]}

      current = new_current
      break if current.values.all?{|arr| arr.sum == n*2}

    end
    current.keys
  end
    
p balanced_parens(4)
