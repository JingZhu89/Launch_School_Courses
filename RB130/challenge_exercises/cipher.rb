# Problem:
# Replace each letter in the original string with another letter.
# The first letter of the alphabet should be replaced with the last.
# The second letter of the alphabet should be replaced with the next to last.
# The third letter of the alphabet should be replace with the second from the last.
# Continue on in this manner throughout the alphabet.
# For example, the word money gets encrypted as nlmvb

# Example:
# need a Cipher class
# the class has 1 class method encode
# the encode method performs the string transform as described
# result are all in lower case
# long strings are broken down in groups of 5 seperated by spaces
# non alphabets are ignored
# numbers are kept the same

# Data: save the letters in arrays for easy manipulation, needs alphabets as constant

# Algorithm:
# encode class method iterate through each letter in the array and replace with another one

# a simple cipher
class Cipher
  ALPHABETS = ('a'..'z').to_a
  NUMBERS = ('0'..'9').to_a

  def self.encode(str)
    letters = str.chars
    letters = letters.map { |letter| switch_letter(letter) } - ['']
    group_of_five(letters).join(' ')
  end

  def self.switch_letter(letter)
    letter = letter.downcase
    if ALPHABETS.include?(letter)
      location = ALPHABETS.index(letter)
      swap_to_location = ALPHABETS.size - location - 1
      ALPHABETS[swap_to_location]
    elsif NUMBERS.include?(letter)
      letter
    else
      ''
    end
  end

  def self.group_of_five(arr)
    result = []
    temp = ''
    arr.each_with_index do |letter, index|
      temp << letter
      if temp.length == 5 || index == (arr.size - 1)
        result << temp
        temp = ''
      end
    end
    result
  end
end
