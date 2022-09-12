=begin
# privacy

class Machine
  def initialize
    @switch = :off
  end

  def start
    self.flip_switch(:on)
  end

  def stop
    self.flip_switch(:off)
  end

  def switch_status
    "switch is #{switch}"
  end

  private

  def flip_switch(desired_state)
    self.switch = desired_state
  end
  
  attr_accessor :switch
end

p Machine.new.switch_status



# fixed array

class FixedArray
  attr_reader :arr, :size
  def initialize(size, value = nil)
    @size = size
    @arr = [value] * 5
  end

  def to_a
    arr.clone
  end

  def [](index)
    arr.fetch(index)
  end

  def []=(index, value)
    self[index]
    arr[index] = value
  end

  def to_s
    arr.to_s
  end

end

# fix array

fixed_array = FixedArray.new(5)

puts fixed_array[3] == nil
puts fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'

begin
  fixed_array[6]
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end

class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student
end

class CircularQueue
  def initialize(size)
    @arr = []
    @size = size
  end

  def enqueue(value)
    @arr << value
    if @arr.size > @size
      @arr.shift
    end
  end

  def dequeue
    @arr.shift
  end

end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

class MiniLangError < StandardError; end
class InvalidTokenError < MiniLangError
  def initialize(msg = "InvalidToken!")
    super
  end
end
class EmptyStackError < MiniLangError; end

class Minilang
  def initialize(arg)
    @commands = arg.downcase.split
    @register = 0
    @stack = []
  end
  
  VALID_COMMAND = %w(add push sub div mod mult pop print)


  def eval
    @commands.each do |command|
      command_check(command)
    end
  rescue MiniLangError => e
    puts e.message
  end

  def command_check(command)
    if command =~  /\A[-+]?\d+\z/
      self.register = command.to_i
    elsif VALID_COMMAND.include?(command) 
      self.send("#{command}")
    else 
      raise InvalidTokenError
    end
  end

  def push
    stack << register
  end

  def add
    self.register = (register + stack.pop)
  end

  def sub
    self.register = (register - stack.pop)
  end

  def mult
    self.register = (register * stack.pop)
  end

  def div
    self.register = (register / stack.pop)
  end

  def mod
    self.register = (register % stack.pop)
  end

  def pop
    check_empty_stack
    self.register = stack.pop
  end

  def print
    puts register
  end

  def check_empty_stack
    if stack.empty?
    raise EmptyStackError, "EmptyStack!"
    end
  end

  private
  attr_accessor :stack, :register

end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)

F_TO_C = '9 PUSH 5 PUSH 32 PUSH %<degrees_f>d SUB MULT DIV PRINT'
Minilang.new(format(F_TO_C, degrees_f: 98)).eval



class Guessing_Game

  RESULT_MESSAGE = {
    high: "your guess is too high",
    low: "your result is too low",
    match: "that's the number"
  }.freeze

  WIN_OR_LOSE = {
    high: :lose,
    low: :lose,
    match: :win
  }.freeze

  GAME_RESULT_MESSAGE = {
    win: "You Won",
    lose: "You have no more guesses. you lose"
  }.freeze

  def initialize(min, max)
    @range = (min..max)
    @number_of_guesses = Math.log2(@range.size).to_i + 1
    @number = nil 
    @result = nil
  end

  def play
    reset_game
    puts number
    puts GAME_RESULT_MESSAGE[play_game]
  end

  private

  def reset_game
    self.number = rand(@range)
  end

  def get_user_input
    display_guesses_left
    guess = nil
    loop do
      puts "=> enter a number between 1 and 100"
      guess = gets.chomp.to_i
      break if (1..100).cover?(guess)
      puts "=> invalid number"
    end
    self.number_of_guesses -= 1
    guess
  end

  def display_guesses_left
    if number_of_guesses == 1
      puts "You have 1 guess left"
    else
      puts "You have #{number_of_guesses} guesses remaining."
    end
  end

  def check_number
    guess = get_user_input
    if guess < number
      self.result = :low
    elsif guess > number
      self.result = :high
    else
      self.result = :match
    end
  end

  def play_game
    until number_of_guesses == 0 do
      check_number
      puts RESULT_MESSAGE[result]
      break if result == :match
    end
    WIN_OR_LOSE[result]
  end

  attr_accessor :number_of_guesses, :result, :number

end

game = Guessing_Game.new(20,30)
game.play
=end

class Card
  include Comparable
  attr_accessor :value
  attr_reader :suit, :rank

  JQKA_VALUES ={
    'Jack' => 11,
    'Queen' => 12,
    'King' =>  13,
    'Ace' =>  14
  }

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
    @value = card_value
  end

  def card_value
    if (2..10).cover?(rank)
      rank
    else
      JQKA_VALUES[rank]
    end
  end

  def <=>(other_card)
    self.value <=> other_card.value
  end

  def to_s
    "#{rank} of #{suit}"
  end

 
end

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  def initialize
    @deck = reset_deck
  end

  def draw
    deck.pop
  end

  private

  def deck
    if @deck.empty?
      @deck = reset_deck
    else
      @deck
    end
  end

  def reset_deck
    cards = RANKS.product(SUITS).shuffle
    cards.map {|rank, suit| Card.new(rank,suit)}
  end
end

# Include Card and Deck classes from the last two exercises.

class PokerHand
  attr_reader :hand, :deck
  def initialize(deck)
    @deck = deck
    @hand = []
    generate_hand
  end

  def print
    p hand.map { |card| "#{card.rank}:#{card.suit}" }
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  # private

  attr_reader :hand, :deck


  def generate_hand
    5.times { hand << deck.draw }
  end

  def ranks
    hand.map { |card| card.rank }
  end
  
  def suits
    hand.map { |card| card.suit }
  end

  def values
    hand.map {|card| card.value }
  end

  def royal_flush?
    straight_flush? && values.sum == 60
  end

  def straight_flush?
    straight? && flush?
  end

  def four_of_a_kind?
    counts.values.count(4) == 1
  end

  def full_house?
    three_of_a_kind? && pair?
  end

  def flush?
    suits.uniq.count == 1
  end

  def straight?
    minimum = values.min
    straight_arr = [minimum]
    4.times do 
      minimum += 1
      straight_arr << minimum
    end
    values.sort == straight_arr
  end

  def three_of_a_kind?
    counts.values.count(3) == 1
  end

  def two_pair?
    counts.values.count(2) == 2
  end

  def pair?
    counts.values.count(2) == 1
  end

 

  def counts
    uniq_ranks = ranks.uniq
    rank_counts = {}
    uniq_ranks.each {|rank| rank_counts[rank] = ranks.count(rank)}
    rank_counts
  end


end

hand = PokerHand.new(Deck.new)
hand.print
puts hand.evaluate

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new('Queen', 'Clubs'),
  Card.new('King',  'Diamonds'),
  Card.new(10,      'Clubs'),
  Card.new('Ace',   'Hearts'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'

