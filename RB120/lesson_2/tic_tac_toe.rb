=begin
  two player board game
  each player take take turns to mark a square on a board
  the player who marks a straight line first wins the game
  nouns: player, turns, line, board, game, square
  verb: mark
=end

module Format
  WIDTH = 50
  def prompt(message)
    puts "=> #{message}"
  end

  def display_with_double_divider(message)
    puts "=" * WIDTH
    puts message.center(WIDTH, ' ')
    puts "=" * WIDTH
  end

  def display_with_single_divider(message)
    puts "-" * WIDTH
    puts message.center(WIDTH, ' ')
    puts "-" * WIDTH
  end

  def clear
    system 'clear'
  end
end

class Board
  include Format
  attr_reader :size, :squares, :square_width, :winning_sets
  def initialize(size)
    @size = size
    @square_width = (size**2).to_s.size + 2
    @squares = {}
    generate_squares
    @winnig_sets = []
    generate_winning_sets
    @available_squares = []
  end

  def generate_squares
    1.upto(size**2) do |index|
      squares[index] = Square.new(index.to_s)
    end
  end

  def generate_winning_sets
    @winning_sets = winning_rows + winning_columns + winning_diagonals
  end

  def winning_rows
    rows = []
    first_row = (1..size).to_a
    0.upto(size - 1) do |multiplier|
      rows << first_row.map { |num| num + size * multiplier }
    end
    rows
  end

  def winning_columns
    columns = []
    first_column = (0..size - 1).map { |num| num * size + 1 }
    0.upto(size - 1) do |increment|
      columns << first_column.map { |num| num + increment }
    end
    columns
  end

  def winning_diagonals
    diagonals = []
    diagonals << (1..size).map { |num| 1 + (num - 1) * (size + 1) }
    diagonals << (1..size).map { |num| size + (num - 1) * (size - 1) }
    diagonals
  end

  def divider_line
    ('+' + '-' * square_width) * size + '+'
  end

  def input_line(row_index)
    line = ''
    1.upto(size) do |column_index|
      key = (row_index - 1) * size + column_index
      line << "|#{squares[key].value.center(square_width, ' ')}"
    end
    line << '|'
  end

  def display(clear_screen = true)
    clear if clear_screen
    display_with_double_divider("#{size} * #{size} Tic Tac Toe")
    prompt("You are : #{Human::MARKER} Computer is : #{Computer::MARKER}")
    1.upto(size) do |row_index|
      puts divider_line
      puts input_line(row_index)
    end
    puts divider_line
  end

  def available_squares
    squares.keys.select { |k| squares[k].unmarked? }
  end

  def full?
    if available_squares.empty?
      display_with_single_divider("It's a tie")
      return true
    end
    false
  end

  def line_values(line)
    line.map { |key| squares[key].value }
  end

  def square_to_defend
    winning_sets.each do |line|
      values = line_values(line)
      if values.count(Human::MARKER) == size - 1 &&
         values.count(Computer::MARKER) == 0
      return values.select { |v| v != Human::MARKER }[0].to_i
      end
    end
    nil
  end

  def square_to_win
    winning_sets.each do |line|
      values = line_values(line)
      if values.count(Computer::MARKER) == size - 1 &&
         values.count(Human::MARKER) == 0
        return values.select { |v| v != Computer::MARKER }[0].to_i
      end
    end
    nil
  end

  def square_to_line
    winning_sets.each do |line|
      values = line_values(line)
      if values.count(Human::MARKER) == 0 &&
         values.count(Computer::MARKER) != 0
        return values.select { |v| v != Computer::MARKER }.sample.to_i
      end
    end
    nil
  end

  def key_square
    if size.odd?
      ks = size**2 / 2 + 1
      return ks if available_squares.include?(ks)
    end
    nil
  end

  def human_won(line)
    line_values(line).all? { |value| value == Human::MARKER }
  end

  def computer_won(line)
    line_values(line).all? { |value| value == Computer::MARKER }
  end

  def winner
    winning_sets.each do |line|
      if human_won(line)
        display_with_single_divider("You Won!")
        return Human::MARKER
      elsif computer_won(line)
        display_with_single_divider("Computer Won")
        return Computer::MARKER
      end
    end
    nil
  end

  def reset
    squares.each { |k, square| square.value = k.to_s }
  end
end

class Square
  attr_accessor :value
  def initialize(value)
    @value = value
  end

  def unmarked?
    value != Human::MARKER && value != Computer::MARKER
  end

  def to_s
    value
  end
end

class Player
  include Format

  def mark(board)
    index = pick_a_number(board)
    board.squares[index].value = self.class::MARKER
  end
end

class Human < Player
  MARKER = 'X'

  def pick_a_number(board)
    number = nil
    loop do
      prompt("please pick a number from the board")
      number = gets.chomp.to_i
      break if board.available_squares.include?(number)
      prompt("invalid input")
    end
    number
  end
end

class Computer < Player
  MARKER = 'O'

  def initialize(difficulty_level = 3)
    @difficulty = difficulty_level
  end

  def pick_a_number(board)
    case @difficulty
    when 1 then easy_mode(board)
    when 2 then medium_mode(board)
    when 3 then hard_mode(board)
    end
  end

  def easy_mode(board)
    board.available_squares.sample
  end

  def medium_mode(board)
    if board.square_to_win
      board.square_to_win
    elsif board.square_to_defend
      board.square_to_defend
    else
      easy_mode(board)
    end
  end

  def hard_mode(board)
    if board.square_to_win
      board.square_to_win
    elsif board.square_to_defend
      board.square_to_defend
    elsif board.key_square
      board.key_square
    elsif board.square_to_line
      board.square_to_line
    else
      easy_mode(board)
    end
  end
end

class TTTGame
  include Format

  attr_reader :human, :computer, :board

  def initialize
    display_welcome_message
    @board = Board.new(choose_board_size)
    @human = Human.new
    @computer = Computer.new
  end

  def choose_board_size
    size = nil
    loop do
      prompt(
        "please chose the size of the board e.g. enter 3 for a 3 x 3 board")
      size = gets.chomp.to_i
      break if size.class == Integer && size >= 3
      prompt("Sorry, invalid input")
    end
    size
  end

  def display_welcome_message
    display_with_double_divider("Welcome to Tic Tac Toe")
  end

  def display_goodbye_message
    display_with_double_divider("Thank you for playing Tic Tac Toe. Goodbye")
  end

  def play_again?
    answer = nil
    loop do
      prompt("Would you like to play again? (Y/N)")
      answer = gets.chomp.downcase
      break if ['y', 'n'].include?(answer)
      prompt("Sorry, invalid input")
    end
    answer == 'y'
  end
  
  def play
    loop do
      loop do
        board.display
        human.mark(board)
        board.display
        break if board.winner || board.full? 
        computer.mark(board)
        board.display
        break if board.winner || board.full?
      end
      break if !play_again?
      board.reset
    end
    display_goodbye_message
  end
end


game = TTTGame.new
game.board.display
game.play

