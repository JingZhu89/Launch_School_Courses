# Combine Two Lists
def interleave1(arr1, arr2)
  n = 0
  combined_arr = []
  while n < arr1.size do 
    combined_arr << arr1[n]
    combined_arr << arr2[n]
    n += 1
  end
  combined_arr
end

# Combine Two Lists
def interleave(arr1, arr2)
  arr1.zip(arr2).flatten
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

#Lettercase Counter
def letter_case_count(str)
  lowercase = str.count("a-z")
  uppercase = str.count("A-Z")
  neither = str.length - lowercase - uppercase
  { lowercase: lowercase, uppercase: uppercase, neither: neither}
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

#Capitalize Words

def word_cap(str)
  str.split.map(&:capitalize).join(" ")
end

p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# swapcase
def swapcase(str)
  arr = str.chars.map do |char|
          if char.upcase != char
            char.upcase
          elsif char.downcase != char
            char.downcase
          else
            char
          end
        end
  arr.join       
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'


# Staggered Caps (Part 1)
def staggered_case(str)
  result = ''
  str.chars.each_with_index do |char, index|
    if index.even?
      result << char.upcase
    elsif index.odd?
      result << char.downcase
    end
  end
  result
end

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# Staggered Caps (Part 2)
def staggered_case(str)
  result = ''
  need_to_upcase = true
  str.chars do |char|
    if need_to_upcase == true && char =~ /[a-zA-Z]/
      result << char.upcase
      need_to_upcase = !need_to_upcase
    elsif need_to_upcase == false && char =~ /[a-zA-Z]/
      result << char.downcase
      need_to_upcase = !need_to_upcase
    else
      result << char
    end
  end
  result
end

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

# Multiplicative Average
def show_multiplicative_average(arr)
  format('%.3f',(arr.inject(:*).to_f/arr.size))
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667


# Multiply Lists
def multiply_list(arr1, arr2)
  arr1.zip(arr2).map {|sub_arr| sub_arr.inject(:*) }
end

p multiply_list([3, 5, 7], [9, 10, 11])

# Multiply All Pairs
def multiply_all_pairs(arr1, arr2)
  arr1.product(arr2).map {|sub_arr| sub_arr.inject(:*) }.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# The End Is Near But Not Here
def penultimate(str)
  str.split[-2]
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'


