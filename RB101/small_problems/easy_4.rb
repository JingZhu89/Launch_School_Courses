# Short Long Short
def short_long_short(str1, str2)
  if str1.length > str2.length
    str2 + str1 + str2
  else
    str1 + str2 + str1
  end
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"

# What Century is That?
def century(yr)
  century = (yr.to_f / 100).ceil
  century_format(century)
end

def century_format(century)
  last_digit = century % 10
  if [11, 12, 13].include?(century % 100)
    "#{century}th"
  else
    case century % 10
    when 1 then "#{century}st"
    when 2 then "#{century}nd"
    when 3 then "#{century}rd"
    else "#{century}th"
    end
  end
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'

# leap years part 1
def leap_year?(yr)
  (yr % 400 == 0) || (yr % 4 == 0 && yr % 100 != 0)
end

# leap years part 2
def leap_year2?(yr)
  if yr < 1752
    (yr % 4 == 0) ? true : false
  else
    leap_year?(yr)
  end
end

p leap_year2?(2016) == true
p leap_year2?(2015) == false
p leap_year2?(2100) == false
p leap_year2?(2400) == true
p leap_year2?(240000) == true
p leap_year2?(240001) == false
p leap_year2?(2000) == true
p leap_year2?(1900) == false
p leap_year2?(1752) == true
p leap_year2?(1700) == true
p leap_year2?(1) == false
p leap_year2?(100) == true
p leap_year2?(400) == true

def multisum1(num)
  n = 1
  sum = 0
  while n <= num
    if n % 5 == 0 || n % 3 == 0 
      sum += n 
    end
  n += 1
  end
  sum
end

def multisum(num)
  (1..num).select {|num| num % 3 == 0 || num % 5 == 0}.inject(:+)
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168


# running totals
def running_total1(arr)
  new_arr = []
  n = 0
  runningtotal = 0
  while n < arr.size
    runningtotal += arr[n]
    new_arr << runningtotal
    n += 1
  end
  new_arr
end

def running_total2(arr)
  sum = 0
  arr.each_with_object([]){|n, a| a.push(sum += n)}
end

def running_total(arr)
  sum = 0
  arr.inject([]) do |result, n| 
    result << sum += n
  end
end

p running_total([2, 5, 13])
p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []

# string to integer

def string_to_integer(str)
  numbers = { '1' => 1,'2' => 2,'3' => 3,'4' => 4,'5' => 5,'6' => 6,'7' => 7,'8' => 8,'9' => 9,'0' => 0 }
  num_arr = str.chars.map{|n| numbers[n]}
  sum = 0
  num_arr.each do |digit|
    sum = sum * 10 + digit
  end
  sum
end

p string_to_integer('1234')

def hexadecimal_to_integer(str)
  numbers = { '1' => 1,'2' => 2,'3' => 3,'4' => 4,'5' => 5,'6' => 6,'7' => 7,'8' => 8,'9' => 9,'0' => 0, 'A' => 10, 'B' => 11, 'C' => 12, 'D' => 13,'E' => 14, 'F' => 15 }
  num_arr = str.upcase.chars.map{|n| numbers[n]}
  sum = 0
  num_arr.each do |digit|
    sum = sum * 16 + digit
  end
  sum
end

p hexadecimal_to_integer('4D9f')


def string_to_signed_integer(str)
  str_num = str[1..-1]
  if str[0] == '+'
    string_to_integer(str_num)
  elsif str[0] == '-'
    string_to_integer(str_num) * -1
  else
    string_to_integer(str)
  end
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100

# integer to string
def integer_to_string(num)
  str = ''
  numbers = { 1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9', 0 => '0' }
  
  loop do
    num, reminder = num.divmod(10)
    str = numbers[reminder] + str
    break if num == 0
  end
  str

end

p integer_to_string(4321)
p integer_to_string(0)
p integer_to_string(5000)

def signed_integer_to_string(num)
  if num > 0
    '+' +  integer_to_string(num)
  elsif num < 0
    '-' + integer_to_string(num * -1)
  else
    integer_to_string(num)
  end
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'
