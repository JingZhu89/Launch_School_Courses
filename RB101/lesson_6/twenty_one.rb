=begin
1. Initialize deck
2. Deal cards to player and dealer
(player see two player cards, dealer show one dealer card)
3. Player turn: hit or stay
  - repeat until bust or "stay"
if hit, draw card and calculate total
decide bust or not, if not repeat the loop)
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
  - repeat until total >= 17
(calculate current dealer value (ace), if not >=17 and not bust
dealer hit again)
6. If dealer bust, player wins.
7. Compare cards and declare winner.
=end

TENS = %w(Jack Queen King)
WINNING_NUM = 21
DEALER_NUM = 17

def prompt(msg)
  puts ">>#{msg}"
end

def initialize_deck
  deck = []
  suits = %w(Heart Diamond Club Spade)
  values = Array('2'..'10') + TENS + ['Ace']
  suits.each do |suit|
    values.each do |value|
      deck << [suit, value]
    end
  end
  deck
end

def formatted_cards(cards, all_or_hide = 'all')
  flatten_cards = []
  cards.each { |sub_arr| flatten_cards << sub_arr.join(': ') }
  case all_or_hide
  when 'all'
    flatten_cards.join(', ')
  when 'hide'
    flatten_cards.drop(1).join(', ')
  end
end

def total_without_ace(cards)
  sum = 0
  cards.each do |sub_arr|
    if TENS.include?(sub_arr[1])
      sum += 10
    elsif sub_arr[1] != 'Ace'
      sum += sub_arr[1].to_i
    end
  end
  sum
end

def final_total(cards)
  number_of_aces = cards.flatten.count('Ace')
  total = total_without_ace(cards) + number_of_aces * 11
  counter = 1
  loop do
    break if total <= WINNING_NUM || counter > number_of_aces
    total -= 10
    counter += 1
  end
  total
end

def deal_card!(deck)
  deck.shift
end

loop do
  prompt("Welcome to #{WINNING_NUM}")
  player_won_sets = 0
  dealer_won_sets = 0
  loop do
    # initialize deck
    prompt("Starting a new set")
    player_cards = []
    dealer_cards = []
    deck = initialize_deck
    deck.shuffle!
    # start a round
    2.times do
      player_cards << deal_card!(deck)
      dealer_cards << deal_card!(deck)
    end

    prompt("Your cards >> #{formatted_cards(player_cards)}")
    prompt("Dealer card >> #{formatted_cards(dealer_cards, 'hide')}")

    # player's turn start
    prompt("Player start first")
    player_total = final_total(player_cards)
    dealer_total = final_total(dealer_cards)
    player_cards_display = formatted_cards(player_cards)
    dealer_cards_display = formatted_cards(dealer_cards)
    loop do
      prompt("please choose h(hit)/s(stay)")
      player_input = gets.chomp.downcase
      # when player choose hit:
      # display new cards break if busted
      # display final total
      case player_input
      when 'h'
        player_cards << deal_card!(deck)
        player_cards_display = formatted_cards(player_cards)
        player_total = final_total(player_cards)
        prompt("You hit>> #{player_cards_display}")
        if final_total(player_cards) > WINNING_NUM
          dealer_won_sets += 1
          prompt("BUST!! your total is #{player_total}, dealer won this set")
          break
        end
      # when player choose stay:
      # display final cards
      # calculate total
      # dealer turn starts
      # break until bust or >=17
      # determine the winner
      when 's'
        prompt("You stayed, your final cards >> #{player_cards_display}")
        prompt("Your final total is #{player_total}")
        # dealer turn starts
        prompt("Dealer's turn")
        prompt("Dealer's card revealed >> #{dealer_cards_display}")
        loop do
          if dealer_total > WINNING_NUM
            player_won_sets += 1
            prompt("BUST!! Dealer's total is #{dealer_total}, player won this set")
            break
          elsif dealer_total >= DEALER_NUM
            prompt("Dealer stayed, dealer's final cards >> #{dealer_cards_display}")
            prompt("Dealer's final total is #{dealer_total}")
            if dealer_total > player_total
              dealer_won_sets += 1
              prompt("Dealer won this set")
            elsif dealer_total < player_total
              player_won_sets += 1
              prompt("Player Won this set")
            else
              prompt("It's a tie")
            end
            break
          end
          dealer_cards << deal_card!(deck)
          dealer_cards_display = formatted_cards(dealer_cards)
          dealer_total = final_total(dealer_cards)
          prompt("Dealer hit >> #{dealer_cards_display}")
        end
        break
      else
        prompt('Invalid input, please try again')
      end
    end
    prompt("Player vs Dealer >> #{player_won_sets} : #{dealer_won_sets}")
    break if dealer_won_sets == 5 || player_won_sets == 5
  end

  if dealer_won_sets == 5
    prompt("DEALER WON")
  else
    prompt("PLAYER WON")
  end

  restart_input = ''
  loop do
    prompt("Do you want to try again? Y/N")
    restart_input = gets.chomp.upcase
    break if restart_input == 'Y' || restart_input == 'N'
    prompt("Invalid input, please try again")
  end

  break if restart_input == 'N'
end
