# P: convert octal number to decimal number, invalid input is treated as ocatal 0
# E: need to have a Octal class, it takes an number string at construct
  # need a to_decimal instance method that convert the octal to a decimal number
  # any input string that's not a number should return 0
  # 8 and 9 are seen as invalid numbers
# D: other than instance variable that stores the octal number string, probably need \
      #an array to store differnet digits for easy calculation
# A: split the octal num to different digits
  # to_decimal
  # check if the number is valid number if not return 0 (valid_octal?)
  # initialize sum as 0
  # reverse the order of the arr
  # iterate through the array and add arr[index] * 8 ^ index = sum

class Octal
  def initialize(num)
    @octal_number = num
    validate!
  end

  def to_decimal
    digits = asc_digits
    sum = 0
    digits.each_with_index do |d, i|
      sum += d * 8**i
    end
    sum
  end

  def validate!
    if !!@octal_number.match(/\A[0-7]+\z/)
      @octal_number = @octal_number.to_i.to_s
    else
      @octal_number = '0'
    end
  end

  def asc_digits
    @octal_number.chars.reverse.map(&:to_i)
  end
end