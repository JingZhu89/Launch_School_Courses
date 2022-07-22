=begin
# cute angles 
DEGREE = "\xC2\xB0"
def dms(degree)
  d = degree.floor
  m = ((degree - d) * 60).floor
  s = (((degree - d) * 60 - m) * 60).floor
  "%(#{d}#{DEGREE}#{format2(m)}\"#{format2(s)}')"
end

def format2(num)
  sprintf("%02d",num)
end

p dms(30) 
p dms(76.73) == %(76°43'48")
p dms(254.6)
p dms(93.034773) 
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# delete vowels
VOWELS = %w(a e i o u)
def remove_vowels(str_arr)
  new_arr = []
  str_arr.each do |str|
    new_str = ''
    str.each_char do |char|
      unless VOWELS.include?(char.downcase)
        new_str << char
      end
    end
    new_arr << new_str
  end
  new_arr
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# Fibonacci Number Location By Length
def find_fibonacci_index_by_length(digits)
  finbonacci = [1, 1]
  loop do 
    finbonacci << finbonacci[-1] + finbonacci[-2]
    break if finbonacci[-1].to_s.length >= digits 
  end
  finbonacci.length
end

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847

# reversed arrays
require 'pry'

def reverse!(arr)
  n = arr.length
  while n > 0
    arr << arr[n - 1]
    arr.delete_at(n - 1)
    n -= 1
  end
  arr
end

list = [1,2,3,4]
p result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

p list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

p list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

p list = []
p reverse!(list) == [] # true
p list == [] # true

# reversed arrays2

def reverse(arr)
  arr.each_with_object([]) {|element,reverse_arr| reverse_arr.unshift(element)}
end

p reverse([1,2,3,4]) == [4,3,2,1]          # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

p list = [1, 3, 2]                      # => [1, 3, 2]
p new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true

# combining arrays

def merge(arr1, arr2)
  (arr1 + arr2).uniq
end

p merge([1, 3, 5], [3, 6, 9]) 

# Halvsies
def halvsies(arr)
  arr1 = []
  arr3 = []
  slice_index = (arr.size.to_f / 2).ceil
  arr1 = arr.slice(0, slice_index)
  arr2 = arr.slice(slice_index, arr.size - slice_index)
  [arr1, arr2]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]

# find the duplicates
def find_dup(arr)
  arr.each do |element|
    if arr.count(element) == 2
      return element
    end
  end
end

p find_dup([1, 5, 3, 1]) == 1
p find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]) == 73


# Does My List Include This?

def include?(arr, search_value)
  arr.each do |element|
    return true if search_value == element
  end
  false
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false

=end

# Right Triangles

def triangle(num)
  num.times do |index|
    puts ' ' * (num - index + 1) + '*' * (index + 1)
  end
end

triangle(9)
