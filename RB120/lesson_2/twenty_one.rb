=begin
1. it has a player and a dealer
2. a deck of cards, shuffled
3. cards are drawn from the deck in order
4. 1st round draw two cards each for player and for dealer
5. first card from dealer is hidden, all other cards are revealed
6. player play first and decide hit or stay
  player can either stay or hit and bust
7. if player stay, dealer play
  dearler has to keep hitting until it reaches 17 or higher
if dealer bust then player win otherwise
compare dearler and player total cards
=end

WINNING_NUMBER = 21
DEALER_STAY_NUMBER = 17

module Display
  WIDTH = 80

  def prompt(message)
    puts "=> #{message}"
  end

  def display_with_double_divider(message)
    puts "=" * WIDTH
    puts message.center(WIDTH, ' ')
    puts "=" * WIDTH
  end

  def get_user_input(message, options, error_message = "Sorry, invalid input")
    user_input = nil
    loop do
      prompt(message)
      user_input = gets.chomp.downcase
      break if options.include?(user_input)
      prompt(error_message)
    end
    user_input
  end

  def busted_message
    if dealer_turn
      "#{dealer} BUSTED, the Winner is #{player}"
    else
      "#{player} BUSTED, the Winner is #{dealer}"
    end
  end

  def turn_message
    dealer_turn ? "#{dealer}'s turn" : "#{player}'s turn"
  end

  def player_stay_message
    "#{player} chose to stay, #{dealer}'s card revealed"
  end

  def dealer_stay_message
    "#{dealer} chose to stay"
  end

  def winner_message
    if player.adjusted_total > dealer.adjusted_total
      "#{player} Won, congratulations"
    elsif player.adjusted_total == dealer.adjusted_total
      "It's a Tie"
    else
      "#{dealer} Won!"
    end
  end

  def display_welcome_message
    display_with_double_divider(
      "Hello #{player}! Welcome to #{WINNING_NUMBER} Game."
    )
  end

  def display_goodbye_message
    display_with_double_divider(
      "Thank you for playing #{WINNING_NUMBER} Game."
    )
  end

  def introduce_dealer
    prompt("Your opponent is #{dealer}")
  end

  def new_game_message
    "Starting a new game"
  end

  private

  def message_line(message)
    puts "|#{message.center(WIDTH - 2, ' ')}|"
  end

  def empty_line
    puts "|" + " " * (WIDTH - 2) + "|"
  end

  def divider
    puts "|" + "-" * (WIDTH - 2) + "|"
  end

  def top_bottom
    puts "+" + "-" * (WIDTH - 2) + "+"
  end
end

class TWGame
  include Display

  def initialize
    display_welcome_message
    @player = Player.new
    @dealer = Dealer.new
    @deck = Deck.new
    @dealer_turn = false
  end

  def play
    clear_screen
    introduce_dealer
    loop do
      deal_first_two_cards
      turn_display(turn_message, new_game_message)
      player_play
      if !player.busted?
        dealer_play
      end
      break unless play_again?
      reset_game
    end
    display_goodbye_message
  end

  private

  attr_reader :player, :dealer
  attr_accessor :participants, :deck, :dealer_turn

  def deal_first_two_cards
    2.times do
      player.cards << deck.deal
      # dealer.cards << deck.deal
    end
    dealer.cards << ['H', 'Ace']
    dealer.cards << ['S', '9']
  end

  def player_play
    loop do
      if player.hit?
        player.cards << deck.deal
        if player.busted?
          turn_display(busted_message, hit_card)
          break
        end
        turn_display(turn_message, hit_card)
      else
        self.dealer_turn = true
        turn_display('', player_stay_message)
        break
      end
    end
  end

  def dealer_play
    loop do
      enter_sth
      if dealer.hit?
        dealer.cards << deck.deal
        if dealer.busted?
          turn_display(busted_message, hit_card)
          break
        end
        turn_display(turn_message, hit_card)
      else
        turn_display(winner_message, dealer_stay_message)
        break
      end
    end
  end

  def turn_display(body, footer = hit_card)
    clear_screen
    table_display(body)
    footer_display(footer)
  end

  def dealer_section_display
    top_bottom
    dealer_total
    empty_line
    dealer_cards
    divider
    2.times { empty_line }
  end

  def dealer_total
    if dealer_turn
      message_line("#{dealer}'s total: #{dealer.adjusted_total}")
    else
      message_line("#{dealer}'s total: ??")
    end
  end

  def dealer_cards
    if dealer_turn
      message_line(dealer.cards_for_display)
    else
      message_line(dealer.first_hand_for_display)
    end
  end

  def player_section_display
    2.times { empty_line }
    divider
    message_line(player.cards_for_display)
    empty_line
    message_line("#{player}'s total: #{player.adjusted_total}")
    top_bottom
  end

  def footer_display(footer)
    display_with_double_divider(footer)
  end

  def table_display(body)
    dealer_section_display
    message_line(body)
    player_section_display
  end

  def hit_card
    card = dealer_turn ? dealer.cards[-1] : player.cards[-1]
    name = dealer_turn ? dealer : player
    "#{name} hit => #{card}"
  end

  def play_again?
    message = 'Would you like to play again Yes(y)/No(n)'
    options = ['yes', 'no', 'y', 'n']
    answer = get_user_input(message, options)
    if ['yes', 'y'].include?(answer)
      return true
    end
    false
  end

  def reset_game
    player.cards = []
    dealer.cards = []
    self.deck = Deck.new
    self.dealer_turn = false
  end

  def clear_screen
    system 'clear'
  end

  def enter_sth
    prompt("Enter anything to see #{dealer}'s next move")
    input = gets.chomp
  end
end

class Participant
  attr_accessor :cards, :name

  include Display

  def initialize
    @name = input_name
    @cards = []
  end

  def busted?
    adjusted_total > WINNING_NUMBER
  end

  def adjusted_total
    n = number_of_aces
    total = maximum_total
    n.downto(1) do
      return total if total <= WINNING_NUMBER
      total -= 10
    end
    total
  end

  def cards_for_display
    cards.map { |suit, face| "[#{suit} #{face}]" }.join(", ")
  end

  def to_s
    name
  end

  private

  def maximum_total
    sum = 0
    cards.each do |_, face|
      value = if face == 'Ace'
                11
              elsif Deck::TENS.include?(face)
                10
              else
                face.to_i
              end
      sum += value
    end
    sum
  end

  def number_of_aces
    cards.count { |_, face| face == 'Ace' }
  end
end

class Player < Participant
  def input_name
    user_input = nil
    loop do
      prompt("Please enter your name")
      user_input = gets.chomp
      break if user_input.strip != ''
      prompt("Sorry, that's not a valid option")
    end
    user_input
  end

  def hit?
    message = 'Please choose from Hit(h)/Stay(s)'
    options = ['h', 's', 'hit', 'stay']
    answer = get_user_input(message, options)
    return true if ['h', 'hit'].include?(answer)
    false
  end
end

class Dealer < Participant
  def input_name
    ['C1', 'C2'].sample
  end

  def hit?
    adjusted_total < DEALER_STAY_NUMBER
  end

  def first_hand_for_display
    "[??], [#{cards[1].join(' ')}]"
  end
end

class Deck
  TENS = ['Jack', 'Queen', 'King']
  FACES = ('2'..'10').to_a + TENS + ['Ace']
  SUITS = ['H', 'S', 'D', 'C']

  attr_reader :cards

  def initialize
    @cards = SUITS.product(FACES).shuffle
  end

  def create_cards
    FACES.product(SUITS)
  end

  def deal
    @cards.shift
  end
end

new_game = TWGame.new
new_game.play
