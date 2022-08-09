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

  def display_history(arr)
    puts 'History'.center(WIDTH, '*')
    arr.each do |subarr|
      puts "#{' ' * (WIDTH / 2 - 8)} #{subarr[0]}: #{subarr[1]}"
    end
    puts '*' * WIDTH
  end
end

class RPSGame
  include Format
  attr_accessor :human, :computer, :history

  def initialize
    @human = Human.new
    @computer = nil
    @history = []
  end

  def display_welcome_message
    display_with_double_divider("Hello #{human.name}! Welcome to Rock Paper Scissor")
  end

  def display_goodbye_message
    display_with_double_divider('Thanks for playing Rock Paper Scissor, goodbey')
  end

  def display_computer
    prompt("Your opponent is #{computer.name}")
  end

  def display_set_starting_message
    display_with_single_divider('New Set')
  end

  def display_moves
    prompt("#{human.name} chose #{human.move}")
    prompt("#{computer.name} chose #{computer.move}")
  end

  def save_moves
    history << [human.name, human.move.to_s]
    history << [computer.name, computer.move.to_s]
  end

  def print_history
    display_history(history)
  end

  def clear_history
    self.history = []
  end

  def determine_set_winner
    if human.move > computer.move
      human.scores
    elsif computer.move > human.move
      computer.scores
    else
      prompt("It's a tie!")
    end
  end

  def display_current_scores
    prompt("#{human.name} [#{human.score}] : #{computer.name} [#{computer.score}]")
  end

  def game_winner
    winner = nil
    if human.score == 3
      winner = human.name
    elsif computer.score == 3
      winner = computer.name
    end
    winner
  end

  def play_again?
    answer = nil
    loop do
      prompt("Would you like to play again Y/N?")
      answer = gets.chomp.downcase
      break if ['y', 'n'].include?(answer)
      prompt("Sorry invalid input")
    end

    return true if answer == 'y'
    false
  end

  def assign_computer
    self.computer = Computer.new
    display_computer
  end

  def reset_game
    clear_history
    human.clear_score
    computer.clear_score
  end

  def play
    display_welcome_message
    loop do
      assign_computer
      loop do
        display_set_starting_message
        human.choose
        computer.choose
        display_moves
        determine_set_winner
        save_moves
        display_current_scores
        break if game_winner
      end
      prompt("#{game_winner} won the game")
      print_history
      break unless play_again?
      reset_game
    end
    display_goodbye_message
  end
end

class Player
  include Format
  attr_accessor :move, :name, :score

  def initialize
    set_name
    self.score = 0
  end

  def scores
    prompt("#{name} scores!")
    self.score += 1
  end

  def clear_score
    self.score = 0
  end
end

class Human < Player
  def set_name
    n = nil
    loop do
      prompt("What's your name?")
      n = gets.chomp
      break unless n.empty?
      prompt("sorry have to enter somthing")
    end
    self.name = n
  end

  def choose
    choice = nil
    m = Move.new
    options_str = m.options_to_s
    loop do
      prompt("Please choose from #{options_str.join('/')}")
      choice = gets.chomp.downcase
      break if options_str.include?(choice)
      prompt("sorry, your choice is invalid")
    end
    choice = choice.to_sym
    self.move = m.options[choice]
  end
end

class Computer < Player
  attr_accessor :personality

  def initialize
    self.personality = [Chappie.new, R2D2.new, Hal.new].sample
    super
  end

  def set_name
    self.name = personality.to_s
  end

  def choose
    rng = Random.rand(1.0)
    sum = 0
    choice = nil
    personality.class::PROBABILITIES.each do |k, v|
      sum += v
      if rng <= sum
        choice = k
        break
      end
    end
    self.move = Move.new.options[choice]
  end
end

class Chappie
  PROBABILITIES = { rock: 0.2,
                    paper: 0.2,
                    scissors: 0.2,
                    lizard: 0.2,
                    spock: 0.2 }
  def to_s
    'Chappie'
  end
end

class R2D2
  PROBABILITIES = { rock: 1.0,
                    paper: 0.0,
                    scissors: 0.0,
                    lizard: 0.0,
                    spock: 0.0 }
  def to_s
    'R2D2'
  end
end

class Hal
  PROBABILITIES = { rock: 0.1,
                    paper: 0.0,
                    scissors: 0.7,
                    lizard: 0.1,
                    spock: 0.1 }
  def to_s
    'Hal'
  end
end

class Move
  attr_reader :options

  def initialize
    @options = { rock: Rock.new,
                 paper: Paper.new,
                 scissors: Scissors.new,
                 lizard: Lizard.new,
                 spock: Spock.new }
  end

  def options_to_s
    options.keys.map(&:to_s)
  end
end

class Rock
  def >(other_choice)
    other_choice.class == Scissors || other_choice.class == Lizard
  end

  def <(other_choice)
    other_choice.class == Paper || other_choice.class == Spock
  end

  def to_s
    'rock'
  end
end

class Paper
  def >(other_choice)
    other_choice.class == Rock || other_choice.class == Spock
  end

  def to_s
    'paper'
  end
end

class Scissors
  def >(other_choice)
    other_choice.class == Paper || other_choice.class == Lizard
  end

  def to_s
    'scissors'
  end
end

class Lizard
  def >(other_choice)
    other_choice.class == Paper || other_choice.class == Spock
  end

  def to_s
    'lizard'
  end
end

class Spock
  def >(other_choice)
    other_choice.class == Scissors || other_choice.class == Rock
  end

  def to_s
    'spock'
  end
end

new_game = RPSGame.new
new_game.play
