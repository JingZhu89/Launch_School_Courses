=begin
# Rotation (Part 1)
def rotate_array(arr)
  rotated_arr = arr.slice(1, arr.size - 1)
  rotated_arr << arr[0]
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]                 # => true

# Rotation (Part 2)
def rotate_rightmost_digits(num, digits)
  num_arr = num.to_s.chars 
  slice_index = num_arr.length - digits
  rotate_nums = num_arr.slice!(slice_index, digits)
  new_arr = num_arr.concat(rotate_array(rotate_nums))
  new_arr.join.to_i
end


p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917

# Rotation (part 3)
def max_rotation(num)
  n = num.to_s.length
  until n == 1  
    num = rotate_rightmost_digits(num, n)
    n -= 1
  end
  num
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845

def initialize_switches(n)
  keys = (1..n).to_a
  keys.each_with_object({}){|key, hsh| hsh[key] = false}
end
# turn switch

def switches_to_turn(round, n)
  ending_mutiplier = n / round
  (1..ending_mutiplier).to_a.map{|num| num * round}
end


def turn_some_switches(n)
  switch_hsh = initialize_switches(n)
  round = 1
  switches_to_turn = {}
  loop do 
    switches_to_turn = switches_to_turn(round, n)
    switches_to_turn.each do |switch|
      switch_hsh[switch] = !switch_hsh[switch]
    end
    break if round == n
    round += 1
  end
  on = switch_hsh.select{|k, v| v == true}.keys
  off = switch_hsh.select{|k, v| v == false}.keys
  "lights #{on[0..-2].join(', ')} and #{on[-1]} are on, lights #{off[0..-2].join(', ')} and #{off[-1]} are off"
end

p turn_some_switches(5)

# diamonds
# iterate through an array of 1..n to print n number of lines
# within each line , the number of * to print +2 until == 9. then -2
# number of spaces to prinr = (n - number of * )/2

def half_spaces_array(n)
  ascending_spaces = (1..(n/2)).to_a
  ascending_spaces.reverse + [0] + ascending_spaces
end

def diamonds(n)
  half_spaces_array = half_spaces_array(n)
  half_spaces_array.each do |half_space|
    if half_space == n / 2
      puts " " * half_space + "*" + " " * half_space
    else
      space_between_diamonds = n - half_space * 2 - 2
      puts " " * half_space + "*" + " " * space_between_diamonds + "*" + " " * half_space
    end
  end
end

diamonds(11)

def minilang(str)
  stack = []
  register = 0
  str.split.each do |input|
    case input
    when 'PUSH'  then stack << register
    when 'ADD'   then register = register + stack.pop
    when 'SUB'   then register = register - stack.pop
    when 'MULT'  then register = register * stack.pop
    when 'DIV'   then register = register / stack.pop
    when 'MOD'   then register = register % stack.pop
    when 'POP'   then register = stack.pop
    when 'PRINT' then puts register
    when 'S'     then puts stack
    else         register = input.to_i
    end
  end
end

# minilang('PRINT')
# minilang('5 PUSH 3 MULT PRINT')
# minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# minilang('5 PUSH POP PRINT')
# minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# minilang('-3 PUSH 5 SUB PRINT')
# minilang('6 PUSH')
# (nothing printed; no PRINT commands)
minilang('3 PUSH 5 DIV PUSH S 7 PUSH 4 PUSH 5 MULT PRINT PUSH 3 ADD PRINT SUB PRINT DIV PRINT')

# Word to Digit

NUMBERS = {'one'=> '1', 'two'=> '2', 'three'=> '3', 'four'=> '4', 'five'=> '5', 'six'=>'6', 'seven'=> '7', 'eight'=> '8', 'nine'=> '9', 'zero'=> '0'}
def word_to_digit(str)
  NUMBERS.each_key do |word|
    str.gsub!(/\b#{word}\b/, NUMBERS[word])
  end
  trimed_string_arr = trim_numbers(str).split
  trimed_string_arr.map! do |word|
    format_phone_number(word)
  end

  trimed_string_arr.join(" ")

end


def trim_numbers(str)
  arr = str.chars
  numbers = NUMBERS.values
  n = 0
  loop do
    if numbers.include?(arr[n]) && numbers.include?(arr[n + 2]) && arr[n + 1] = ' '
      arr[n + 1] = ''
    end
    break if n == arr.size - 3
    n += 1
  end
  arr.join
end

def format_phone_number(word)
  letters = word.chars
  letters_trimed = word.gsub(/[^0-9a-z]/i, '').chars
  if letters_trimed.all?{|letter| NUMBERS.values.include?(letter)} && letters_trimed.size == 10
    letters.insert(0, "(")
    letters.insert(4, ") ")
    letters.insert(9, "-")
    letters.join("")
  else
    word
  end
  
end

p word_to_digit('Please call me at five five five one two three four four four four. freight Thanks.') 
# == 'Please call me at 5 5 5 1 2 3 4. Thanks.'



def fibonacci(n)
  if n <= 2
    1
  else
    fibonacci(n - 1) + fibonacci(n - 2)
  end
end

p fibonacci(5)

p fibonacci(1) == 1
p fibonacci(2) == 1
p fibonacci(3) == 2
p fibonacci(4) == 3
p fibonacci(5) == 5
p fibonacci(12) == 144
p fibonacci(20) == 6765

def fibonacci(n)
  n1 = 1
  n2 = 0
  f = 0
  counter = 0
  loop do 
    f = n1 + n2
    n1 = n2
    n2 = f
    counter += 1
    break if counter == n
  end
  f
end

p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501
=end

def fibonacci_last(num)
  first, second = [1, 1]
  3.upto(num) do
    first, second = [second, first + second]
  end
  second.to_s[-1].to_i
end

p fibonacci_last(100)