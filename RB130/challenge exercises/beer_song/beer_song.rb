# P: generate the lyrics of the 99 bottles of beer song
# E: BeerSong class with two class methods
  # the verse method can take 1 or two argument
    # 1 argument, print one set of lyric
    # 2 arguments, print a range of lyrics counting from the first number down to the second number
    # 1 set of lyric
    # "num bottle(s) of beer on the wall, num bottle(s) of beer.\n" \
    # "Take one down and pass it around, 98 bottle(s) of beer on the wall.\n"
    # when printing multiple sets, connect with \n
    # when there is 0 bottles,      
    #"No more bottles of beer on the wall, no more bottles of beer.\n" \
    # "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  # the lyric method print all lyrics
# D: store the 3 sets of lyrics, the 0 bottle, 1 bottle and any other number of bottles as method and pass in the number as argument. with the verse method, save the argument as array
# A: verse: iterate through the array and print the message according to the number
  # lyrics iterate through 99-0 and print all the message using verse

class BeerSong
  def self.verses(num1, num2)
    num_arr = (num2..num1).to_a.reverse
    result = ''
    num_arr.each do |num|
      result += verse(num)
      result += "\n" unless num == num_arr[-1]
    end
    result
  end

  def self.verse(num)
    case num
    when 0 then zero_bottle
    when 1 then one_bottle
    when 2 then two_bottles
    else 
      more_than_two_bottles(num)
    end
  end

  def self.lyrics
    verses(99, 0)
  end

  def self.zero_bottle
    "No more bottles of beer on the wall, no more bottles of beer.\n" \
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  end

  def self.one_bottle
    "1 bottle of beer on the wall, 1 bottle of beer.\n" \
    "Take it down and pass it around, no more bottles of beer on the wall.\n" \
  end

  def self.two_bottles
    "2 bottles of beer on the wall, 2 bottles of beer.\n" \
    "Take one down and pass it around, 1 bottle of beer on the wall.\n" \
  end

  def self.more_than_two_bottles(num)
    "#{num} bottles of beer on the wall, #{num} bottles of beer.\n" \
    "Take one down and pass it around, #{num - 1} bottles of beer on the wall.\n" \
  end

end
