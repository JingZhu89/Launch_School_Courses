=begin
# ASCII String Value
def ascii_value(str)
  sum = 0
  str.chars.each { |char| sum += char.ord }
  sum
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0

# after midnight part 1
def time_of_day(minutes)
  hrs, mins_from_midnight = minutes.abs().divmod(60)

  hrs_from_midmight = if hrs >= 24
                        hrs % 24
                      else
                        hrs
                      end
  

  case minutes <=> 0
  when 1 
    sprintf("%02d", hrs_from_midmight) + ":" + sprintf("%02d", mins_from_midnight)
  when -1
    sprintf("%02d", 23 - hrs_from_midmight) + ":" + sprintf("%02d", 60 - mins_from_midnight)
  else
    "00:00"
  end
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"

# after midnight part2
def after_midnight(time)
  hr_mn = time.split(':').map(&:to_i)
  (hr_mn[0] == 24 ? 0 : hr_mn[0]) * 60 + hr_mn[1]
end

def before_midnight(time)
  hr_mn = time.split(':').map(&:to_i)
  (24 * 60) - ((hr_mn[0] == 0 ? 24 : hr_mn[0]) * 60 + hr_mn[1])
end

p after_midnight('00:00') == 0
p after_midnight('12:34') == 754
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0
p before_midnight('12:34') == 686
p before_midnight('00:00') == 0

# letter swap
def swap(str)
  words = str.split
  words.each do |word|
    word[0], word[-1] = word[-1], word[0]
  end
  words.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'

# cleanup the words
def remove_non_alphabetic_characters(str)
  str.gsub(/[^a-zA-Z ]/i,' ')
end

def cleanup(str)
  letters = remove_non_alphabetic_characters(str).chars
  new_letters = []
  letters.each do |letter|
    unless new_letters[-1] == ' ' && letter == ' '
      new_letters << letter 
    end
  end
  new_letters.join
end

p cleanup("---what's my +*& line?") == ' what s my line '

# Letter Counter (Part 1)
def word_to_wordsizes(str)
  str.gsub(/[^a-zA-Z ]/i,'').split.map(&:length)
end

def word_sizes(str)
  uniq_word_sizes = word_to_wordsizes(str).uniq
  word_sizes = word_to_wordsizes(str)
  uniq_word_sizes.each_with_object({}) do |word_size, h|
    h[word_size] = word_sizes.count(word_size)
  end
end


p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
p word_sizes('') == {}

# Alphabetical Numbers
NUMBER_WORDS = %w(zero one two three four
  five six seven eight nine
  ten eleven twelve thirteen fourteen
  fifteen sixteen seventeen eighteen nineteen)

def alphabetic_number_sortby(numbers)
  numbers.sort_by {|number| NUMBER_WORDS[number]}
end

def alphabetic_number_sort(numbers)
  numbers_hsh = {}
  numbers.each do |number|
    numbers_hsh[NUMBER_WORDS[number]] = number
  end
  numbers_hsh.sort.map{|sub_arr| sub_arr[1]}
end

p alphabetic_number_sort((0..19).to_a) 

# ddaaiillyy ddoouubbllee
def crunch(str)
  new_str = ''
  str.each_char do |letter|
    unless letter == new_str[-1]
      new_str << letter
    end
  end
  new_str
end

p crunch('ddaaiillyy ddoouubbllee')
p crunch('4444abcabccba')
p crunch('ggggggggggggggg')
p crunch('a') == 'a'
p crunch('') == ''

=end

# Bannerizer
def box_length(str)
  str.size + 2
end

def print_in_box(str)
  puts "+#{'-' * box_length(str)}+"
  puts "|#{' ' * box_length(str)}|"
  puts "| #{str} |"
  puts "|#{' ' * box_length(str)}|"
  puts "+#{'-' * box_length(str)}+"
end

print_in_box('To boldly go where no one has gone before.')
