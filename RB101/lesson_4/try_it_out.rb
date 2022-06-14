#
str = "joe's favorite color is blue"
str[0] = 'J'
i = 0
while i < str.length - 1
  if str[i] == " "
    str[i + 1] = str[i + 1].upcase!
  end
  i += 1
end
puts str

#
arr = [1, 2, 3, 4, 5]
i = 0
while i < arr.size
  arr[i] += 1
  i += 1
end

p arr

#
hsh = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
hsh[:apple] = 'Fruit'
hsh[:pear] = 'Fruit'
hsh[:carrot] = 'Vegetable'
hsh[:broccoli] = 'Vegetable'
p hsh

#
number_of_pets = {
  'dogs' => 2,
  'cats' => 4,
  'fish' => 1
}

number_of_pets.each {|k, v| puts "i have #{v} #{k}"}

#

def substrings(str)
  substrings_array = []
  starting_index = 0

  while starting_index < str.length - 1
    ending_index = starting_index + 1 
    while ending_index < str.length
    substrings_array << str.slice(starting_index..ending_index)
    ending_index += 1
    end
  starting_index += 1
  end
  substrings_array
end

def is_palindrome?(str)
  str == str.reverse
end

def palindrome_strings(str)
  palindrome_strings = []
  substrings(str).each do |substring|
    palindrome_strings << substring if is_palindrome?(substring)
  end
  palindrome_strings
end

puts palindrome_strings("abcdmom")

#

def starting_number(input_row_number)
  previouse_row_number = input_row_number - 1
  starting_number = (1 + previouse_row_number) * previouse_row_number + 2
end

def sum_row(input_row_number)
  starting_number = starting_number(input_row_number)
  sum = starting_number * input_row_number + (0..input_row_number - 1).sum * 2
  sum
end

puts sum_row(3)

#
def select_fruit(hash)
  result = {}
  hash.each do |k, v|
    if v == 'Fruit'
    result[k] = v
    end
  end
  result
end

produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

puts select_fruit(produce)

#
def double_numbers!(numbers)
  counter = 0

  loop do
    break if counter == numbers.size

    numbers[counter] = numbers[counter] * 2

    counter += 1
  end
  numbers
end

my_numbers = [1, 4, 3, 7, 2, 6]
p double_numbers!(my_numbers)

#
def double_odd_indices(arr)
  counter = 0
  loop do 
  break if counter == arr.size

    if counter.odd?
      arr[counter] *= 2
    end

  counter += 1
  end
  arr
end

my_test_numbers = [1, 4, 3, 7, 2, 6]
p double_odd_indices(my_test_numbers)

#
my_numbers = [1, 4, 3, 7, 2, 6]
def multiply(arr, times)
  counter = 0
  result_arr = []
  loop do
    break if counter == arr.size
    result_arr[counter] = arr[counter] * times
    counter += 1
  end
  result_arr
end
p multiply(my_numbers , 3)
