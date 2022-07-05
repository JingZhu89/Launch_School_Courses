WINNING_COMBO = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9]
]

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

def display_board(hash)
  puts ""
  display_no_input_line
  display_input_line1(hash)
  display_no_input_line
  display_divider_line
  display_no_input_line
  display_input_line2(hash)
  display_no_input_line
  display_divider_line
  display_no_input_line
  display_input_line3(hash)
  display_no_input_line
  puts ""
end

def initialize_board
  new_hash = {}
  (1..9).each { |num| new_hash[num] = INITIAL_MARKER }
  new_hash
end

def display_no_input_line
  puts "     |     |      "
end

def display_divider_line
  puts "-----+-----+------"
end

def display_input_line1(hash)
  puts "  #{hash[1]}  |  #{hash[2]}  |  #{hash[3]}  "
end

def display_input_line2(hash)
  puts "  #{hash[4]}  |  #{hash[5]}  |  #{hash[6]}  "
end

def display_input_line3(hash)
  puts "  #{hash[7]}  |  #{hash[8]}  |  #{hash[9]}  "
end

def prompt(prompt)
  puts ">>#{prompt}"
end

def available_choices(current_results)
  available_choices = []
  current_results.each { |k, v| available_choices << k if v == INITIAL_MARKER }
  available_choices
end

def collect_user_input(current_results)
  user_input = ''
  loop do
    prompt("please pick from an empty slot, here are the slots available: "\
    "#{joiner(available_choices(current_results))}")
    user_input = gets.chomp.to_i
    break if available_choices(current_results).include?(user_input)
    prompt("invalid input")
  end
  current_results[user_input] = PLAYER_MARKER
end

def computer_defending_choices(current_results)
  defending_choices = []
  WINNING_COMBO.each do |sub_arr|
    if current_results.values_at(*sub_arr).count(PLAYER_MARKER) == 2 &&
       current_results.values_at(*sub_arr).count(INITIAL_MARKER) == 1
      sub_arr.each do |element|
        if current_results[element] == INITIAL_MARKER
          defending_choices << element
        end
      end
    end
  end
  defending_choices
end

def computer_attacking_choices(current_results)
  attacking_choices = []
  WINNING_COMBO.each do |sub_arr|
    if current_results.values_at(*sub_arr).count(COMPUTER_MARKER) == 2 &&
       current_results.values_at(*sub_arr).count(INITIAL_MARKER) == 1
      sub_arr.each do |element|
        if current_results[element] == INITIAL_MARKER
          attacking_choices << element
        end
      end
    end
  end
  attacking_choices
end

def collect_computer_input(current_results)
  computer_input = if !computer_attacking_choices(current_results).empty?
                     computer_attacking_choices(current_results).sample
                   elsif !computer_defending_choices(current_results).empty?
                     computer_defending_choices(current_results).sample
                   elsif available_choices(current_results).include?(5)
                     5
                   else
                     available_choices(current_results).sample
                   end

  current_results[computer_input] = COMPUTER_MARKER
end

def winner(current_results)
  winner = nil
  WINNING_COMBO.each do |sub_arr|
    if current_results.values_at(*sub_arr).count(PLAYER_MARKER) == 3
      winner = 'Player'
    elsif current_results.values_at(*sub_arr).count(COMPUTER_MARKER) == 3
      winner = 'Computer'
    end
  end
  winner
end

def out_of_space?(current_results)
  current_results.values.all? { |v| v != INITIAL_MARKER }
end

def joiner(arr, connecter = ', ', last_connecter = 'or')
  n = 0
  str = ''
  case arr.size
  when 0 then ''
  when 1 then arr[0]
  else
    while n < arr.size - 2
      str << arr[n].to_s
      str << connecter
      n += 1
    end
    str << arr[-2].to_s
    str << " #{last_connecter} "
    str << arr[-1].to_s
  end
end

def alternate_player(current_player)
  (['Player','Computer'] - [current_player])[0]
end

def collect_input!(current_results, current_player)
  case current_player
  when 'Player'
    collect_user_input(current_results)
  when 'Computer'
    collect_computer_input(current_results)
  end
end

# loop to restart entire game
loop do
  prompt("Welcome to tic tac toe, here is the board!")
  winning_record = []

  # loop for sets within a game
  loop do
    current_results = initialize_board
    display_board(current_results)
    current_player = ['Player','Computer'].sample
    prompt("#{current_player} goes first")

    # track player and computer's move break if run out of space of someone wins
    loop do
      collect_input!(current_results, current_player)
      prompt("here is #{current_player}'s choice")
      display_board(current_results)
      current_player = alternate_player(current_player)
      break if out_of_space?(current_results) ||
               !!winner(current_results)
    end

    # track set result
    case winner(current_results)
    when 'Computer'
      prompt("computer won this set")
      winning_record << COMPUTER_MARKER
    when 'Player'
      prompt("You won this set")
      winning_record << PLAYER_MARKER
    else
      prompt("It's a tie")
    end

    # determine winning situation of the whole game
    sets_player_won = winning_record.count(PLAYER_MARKER)
    sets_computer_won = winning_record.count(COMPUTER_MARKER)
    if sets_computer_won == 5
      prompt("Computer won the game")
      break
    elsif sets_player_won == 5
      prompt("Player won the game")
      break
    else
      prompt("You have won #{sets_player_won} sets,\
        computer has won #{sets_computer_won} sets")
      prompt("starting next set")
    end
  end

  # input validation for restarting game
  start_over_input = ''
  loop do
    prompt("Do you want to start Y/N ?")
    start_over_input = gets.chomp
    break if start_over_input.upcase == 'N' || start_over_input.upcase == "Y"
    prompt("Invalid input, please try again")
  end

  break if start_over_input.upcase == 'N'
end
