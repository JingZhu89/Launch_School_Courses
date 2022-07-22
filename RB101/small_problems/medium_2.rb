# split the text into sentences
# count the number of words in each sentence
# find the sentence with the max number of words
SENTENCE_ENDING_CHARACTERS = ['?', '.', '!']

def text_to_sentences(text)
  sentences = []
  starting_index = 0
  ending_index = 0
  text.each_char do |char|
    if SENTENCE_ENDING_CHARACTERS.include?(char)
      sentences << text[starting_index..ending_index]
      starting_index = ending_index + 1
    end
      ending_index += 1
  end
  sentences
end

def longest_sentence(text)
  sorted_sentences = text_to_sentences(text).sort_by do |sentence|
                       sentence.split.count{|word| word != ' '}
                     end
  sorted_sentences[-1]
end


def result_displat(text)
  longest_sentence = longest_sentence(text)
  count = longest_sentence.split.count{|word| word != ' '}
  puts "===================================="
  puts longest_sentence
  puts '===================================='
  puts count
end

p result_displat('Four score and seven years ago our fathers brought forth
  on this continent a new nation, conceived in liberty, and
  dedicated to the proposition that all men are created
  equal.
  
  Now we are engaged in a great civil war, testing whether
  that nation, or any nation so conceived and so dedicated,
  can long endure. We are met on a great battlefield of that
  war. We have come to dedicate a portion of that field, as
  a final resting place for those who here gave their lives
  that that nation might live. It is altogether fitting and
  proper that we should do this.
  
  But, in a larger sense, we can not dedicate, we can not
  consecrate, we can not hallow this ground. The brave
  men, living and dead, who struggled here, have
  consecrated it, far above our poor power to add or
  detract. The world will little note, nor long remember
  what we say here, but it can never forget what they
  did here. It is for us the living, rather, to be dedicated
  here to the unfinished work which they who fought
  here have thus far so nobly advanced. It is rather for
  us to be here dedicated to the great task remaining
  before us -- that from these honored dead we take
  increased devotion to that cause for which they gave
  the last full measure of devotion -- that we here highly
  resolve that these dead shall not have died in vain
  -- that this nation, under God, shall have a new birth
  of freedom -- and that government of the people, by
  the people, for the people, shall not perish from the
  earth.')

# now i know my ABCS

BLOCKS = [['B', 'O'],['X','K'],['D','Q'],['C','P'],['N', 'A'],['G', 'T'],['R', 'E'],['F', 'S'],['J','W'],['H','U'],
['V','I'],['L','Y'],['Z','M']]

def block_word?(str)
  letters = str.chars
  letters.each do |char|
    BLOCKS.each do |b1, b2|
      if b1 == char && letters.include?(b2)
        return false
      end
    end
  end
  true
end

p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true

# Lettercase Percentage Ratio
def letter_percentages(str)
  hsh = Hash.new
  uppercase = str.count("A-Z")
  lowercase = str.count("a-z")
  hsh[:lowercase] = format('%.2f',lowercase.to_f/str.length * 100)
  hsh[:uppercase] = format('%.2f',uppercase.to_f/str.length * 100)
  hsh[:neither] = format('%.2f',100 - lowercase.to_f/str.length * 100 - uppercase.to_f/str.length * 100)
  hsh
end

p letter_percentages('abCdef 123')
p letter_percentages('AbCd +Ef') 
p letter_percentages('123')
p letter_percentages('abcdefGHI')

#accumulative count of ( is always >= count of )

# Matching Parentheses?

def balanced?(str)
  num_op_parentheses = 0
  num_ed_parentheses = 0
  str.each_char do |char|
    case char 
    when '('
    num_op_parentheses += 1
    when ')'
    num_ed_parentheses += 1
    end
    return false if num_ed_parentheses > num_op_parentheses
  end
  return false if num_ed_parentheses != num_op_parentheses
  true
end

p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false



# Triangle Sides
def triangle(s1, s2, s3)
  arr = [s1, s2, s3]
  arr.each do |s| 
    if arr.sum - s < s
      return :invalid
    end
  end
  if arr.include?(0)
    :invalid
  elsif arr.uniq.size == 1
    :equilateral
  elsif arr.uniq.size == 2
    :isosceles
  else
    :scalene
  end
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid

# Tri-Angles

def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3]
  case
  when angles.sum != 180 || angles.include?(0)
  :invalid
  when angles.include?(90)
  :right
  when angles.all?{|angle| angle < 90}
  :acute
  else
  :obtuse
  end
end


p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid


# Unlucky Days
require 'date'
def friday_13th(yr)
  months = (1..12).to_a
  ct = 0
  months.each do |mth|
    date = Date.new(yr, mth, 13)
    ct += 1 if date.friday? 
  end
  ct
end
p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2

p Date.new(2022,02,31)

# Next Featured Number Higher than a Given Value

def uniq_digits(num)
  num.to_s.chars == num.to_s.chars.uniq
end

def featured(num)
  num = num + 1
  loop do 
    if num.odd? && uniq_digits(num) && (num % 7 == 0)
      return num
    else
      num += 1
    end
  break if num >= 9_999_999_999
  end
"There is no possible number that fulfills those requirements"
end


p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements

# bubble sort

def bubble_sort!(arr)
  max_index = arr.size - 2
  loop do 
    swap = false
    0.upto(max_index) do |index|
      if arr[index] > arr[index + 1]
        arr[index], arr[index + 1] = arr[index + 1], arr[index]
        swap = true
        max_index = index
      end
    end
    break if swap == false
  end
end


array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

p array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

p array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

# Sum Square - Square Sum
def sum_square_difference(num)
  squre_of_sum = ((1..num).inject(:+))**2
  sum_of_square = (1..num).map{|num| num**2}.inject(:+)
  squre_of_sum - sum_of_square
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150

