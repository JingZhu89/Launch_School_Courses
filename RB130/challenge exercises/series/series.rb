# P: given a string or numbers, return all consecutive number series of a specific length
# E: 
  # need a Series class and pass in 1 argument at construct which is the number
  # digits in the number doesn't have to be in order
  # need a instance method slices that takes 1 number as argument
  # slice the string by the length defined by this number
  # when the slices argument is longer than the length of the number, throw ArgumentError
# D:
  # the result is stored in nested arrays
  # the inner array is sets of sliced numbers
# A:
  # construct
    # instance variable track the number.chars
  # slice method
    # calculate the length of the str_arr, if it's smaller than the argument throw argument error
    # start with empty array
    # iterate through 0 to length str_arr - argument
    # add str_arr.slice(index, length) map to_i to empty array
    # return the array

class Series
  def initialize(str)
    @numbers = str.chars
  end

  def slices(length)
    raise ArgumentError if @numbers.size < length
    ending_index = @numbers.size - length
    result = []
    0.upto(ending_index) do |index|
      result << @numbers.slice(index, length).map(&:to_i)
    end
    result
  end

end
