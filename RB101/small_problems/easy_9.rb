
# Welcome Stranger
def greetings(arr, hsh)
  name = arr.join(" ")
  job = hsh.values.join(" ")
  "=> Hello, #{name}! Nice to have a #{job} around."
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })

# Double Doubles
def double_numbers(num)
  str = num.to_s
  length = str.length
  mid = length/2 - 1
  str[0..mid] == str[mid + 1..length - 1] && length > 1
end

def twice(num)
  double_numbers(num) ? num : (num * 2)
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10

# always negative
def negative(num)
  -num.abs
end

p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0      # There's no such thing as -0 in ruby

# counting up
def sequence(num)
  if num > 0
  (1..num).to_a
  else
  (num..0).to_a
  end
end

p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(-1) == [-1, 0]

# Uppercase Check
def uppercase?(str)
  str.each_char do |char| 
    if char =~ /[a-z]/ 
      return false
    end
  end
  true
end
p uppercase?('t') == false
p uppercase?('T') == true
p uppercase?('Four Score') == false
p uppercase?('FOUR SCORE') == true
p uppercase?('4SCORE!') == true
p uppercase?('') == true

# how long are you
def word_lengths(str)
  str.split.map {|word| "#{word} #{word.length}"}
end


p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []


# name swapping
def swap_name(str)
  name = str.split
  "#{name[1]}, #{name[0]}"
end

p swap_name('Joe Roberts') == 'Roberts, Joe'

# Sequence Count
def sequence(count, starting_num)
  arr = []
  n = 0
  until n == count
    n += 1
    arr << n * starting_num
  end
  arr
end
p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []

# Grade book
def get_grade(num1, num2, num3)
  avg = (num1 + num2 + num3)/3
  case avg
  when 90..100 then 'A'
  when 80..89  then 'B'
  when 70..79  then 'C'
  when 60..69  then 'D'
  else              'F'
  end
end

p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"

# Grocery List
def buy_fruit(arr)
  new_arr = []
  arr.each do |sub_arr|
    sub_arr[1].times {new_arr << sub_arr[0]}
  end
  new_arr
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]



# Group Anagrams
words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
  'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
  'flow', 'neon']


def uniq_and_sorted(words)
  words.map{ |word| word.chars.sort.join}.uniq
end

def anagrams(words)
  new_hsh = {}
  hsh_kys = uniq_and_sorted(words)
  hsh_kys.each do |key|
    new_hsh[key] = []
    words.each do |word|
      if word.chars.sort.join == key
        new_hsh[key] << word
      end
    end
  end

  new_hsh.each_value do |value|
    puts '---------'
    p value
  end
end

anagrams(words)