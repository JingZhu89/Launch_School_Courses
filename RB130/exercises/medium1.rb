# 1
class Device
  def initialize
    @recordings = []
  end

  def record(recording)
    @recordings << recording
  end
  
  def listen
    record(yield) if block_given?
  end

  def play
    puts @recordings[-1]
  end
end


listener = Device.new
listener.listen { "Hello World!" }
listener.listen
listener.play # Outputs "Hello World!"

2
class TextAnalyzer
  def process
    sample_file = File.open("sample_text.txt")
    file_data = sample_file.read
    yield(file_data)
    sample_file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |file| puts "#{file.split(" ").size} words"  }
analyzer.process { |file| puts "#{file.split("\n").size} lines" }
analyzer.process { |file| puts "#{file.count("a-zA-Z")} letters" }
analyzer.process { |file| puts "#{file.split("\n\n").size} paragraphs" }

3
items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "Nice selection of food we have gathered!"
end

gather(items) do |produce|
  puts "We've gathered some vegetables: #{produce[1]} and #{produce[2]}"
end

4
def p_birds(arr)
  yield(arr)
end

birds = %w(raven finch hawk eagle)
p_birds(birds) {|_, _, *arr| p arr}

5
items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

gather(items) do | *first_three , last_one |
  puts first_three.join(", ")
  puts last_one
end

gather(items) do | first_one, *middle_two , last_one |
  puts first_one
  puts middle_two.join(", ")
  puts last_one
end

gather(items) do | first_one, *last_three |
  puts first_one
  puts last_three.join(", ")
end

gather(items) do | a,b ,c , d|
  puts "#{a}, #{b}, #{c} and #{d}"
end

6

# Replace the two `method_name` placeholders with actual method calls
def convert_to_base_8(n)
  n.to_s(8).to_i
end

# Replace `argument` with the correct argument below
# `method` is `Object#method`, not a placeholder
base8_proc = method(:convert_to_base_8).to_proc

# We'll need a Proc object to make this code work
# Replace `a_proc` with the correct object
p [8, 10, 12, 14, 16, 33].map(&base8_proc)

# 7
def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      if block_given?
        next if yield(array[index - 1], array[index])
      else
        next if array[index - 1] <= array[index] 
      end
      array[index - 1], array[index] = array[index], array[index - 1]
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
p array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
p array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
p array == %w(alice bonnie Kim Pete rachel sue Tyler)

# 7.5
def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      if block_given?
        next if yield(array[index - 1]) <= yield(array[index])
      else
        next if array[index - 1] <= array[index] 
      end
      array[index - 1], array[index] = array[index], array[index - 1]
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |value| value.downcase }
p array == %w(alice bonnie Kim Pete rachel sue Tyler)