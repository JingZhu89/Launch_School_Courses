# Find the length of the longest substring in the given string that contains exatly 2 characters "a" and 2 characters "e" in it.

# As an example, if the input was “aaee”, the substring (aaee) length would be 4.
# For a string "babanctekeaa", the longest substring is "babancteke" and its length is 10.

# If the length of the input string is 0, return value must be -1 and if none of the substrings contain 2 "a" and "e" characters return -1 as well.

# ------------------------
=begin
input is a string
- iterate through the string to find substrings that has exactly 2 as and 2 es.
  - starting index: from 0 to string.length - 4 (min 4 letters)
  - ending index: from starting index + 3 to last index of array
  - return array of substrinsg
- find the longest substring amoung those substrings

output is a number/int


=end
#--------------------------
def possible_substrings(str)
  substrings = []
  last_starting_index = str.length - 4
  0.upto(last_starting_index) do |index|
    first_ending_index = index + 3
    first_ending_index.upto(str.length-1) do |index2|
      substr = str[index..index2]
      if substr.count('a') == 2 && substr.count('e') ==2
        substrings << substr
      end
    end
  end
  substrings
end

def longest_ae(str)
  substrings = possible_substrings(str)
  longest_ae = substrings.map(&:length).max
  if str.length == 0 || !longest_ae
    return -1
  else
    longest_ae
  end
end


p longest_ae("aaee") == 4
p longest_ae("babanctekeaa") == 10
p longest_ae("xenoglossophobia") == -1
p longest_ae("pteromerhanophobia") == 18
p longest_ae("johannisberger") == -1
p longest_ae("secaundogenituareabb") == 16
p longest_ae("aaaa") == -1



# # You are given an array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one array.

# # You can asume there is never an empty array and there will always be an integer.

# #-------------------
# =begin
# input is an array of int
# -iterate through the array with index
# -keep a running sum 
# -if the current number is equal to the previous number, add to the sum
# -if the current number is differnt from the previous number, push the current sum to the result array and reset the sum to the current number
# output is also an array of sum of consecutive same int



#-------------------
def sum_consecutives(arr)
  sum = arr[0]
  result_arr = []
  arr.each_with_index do |value, index|
    if index == 0 
      next
    elsif index == (arr.length - 1) && value != arr[index - 1]
      result_arr << sum
      result_arr << value
    elsif index == (arr.length - 1) && value == arr[index - 1]
      result_arr << sum + value
    elsif value == arr[index - 1]
      sum += value
    else
      result_arr << sum
      sum = arr[index]
    end
  end
  result_arr
end




p group([1,4,4,4,0,4,3,3,1, 1])


p sum_consecutives([1,4,4,4,0,4,3,3,1, 1]) #== [1,12,0,4,6,2]
p sum_consecutives([1,1,7,7,3]) #== [2,14,3]
p sum_consecutives([-5,-5,7,7,12,0]) #==  [-10,14,12,0]