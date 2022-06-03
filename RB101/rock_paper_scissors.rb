CHOICES = %w(r p s l sp)
WINNING_RULES = { r: %w(l s), p: %w(sp r), s: %w(p l), sp: %w(s r), l: %(s p) }

def prompt(message)
  Kernel.puts(">> #{message}")
end

def user_choice_validation(user_choice)
  CHOICES.include?(user_choice)
end

def win?(first_player, second_player)
  WINNING_RULES[first_player.to_sym].include?(second_player)
end

def display_result(user_choice, computer_choice)
  if computer_choice == user_choice
    prompt("it's a tie")
  elsif win?(user_choice, computer_choice)
    prompt("you win")
  else
    prompt("you lose")
  end
end

def display_score(first_player_score, second_player_score)
  prompt("your current score is #{first_player_score} and computer current score is #{second_player_score}")
end

loop do
  computer_score = 0
  player_score = 0
  loop do
    user_choice = ""
    loop do
      prompt("please make a choice: #{CHOICES.join(', ')}")
      user_choice = Kernel.gets().chomp()
      break if user_choice_validation(user_choice)
      prompt("invalid input please try again")
    end

    computer_choice = CHOICES.sample

    prompt("Your choice is #{user_choice}, computer choice is #{computer_choice}")

    display_result(user_choice, computer_choice)

    if win?(user_choice, computer_choice)
      player_score += 1
    elsif win?(computer_choice, user_choice)
      computer_score += 1
    end

    display_score(player_score, computer_score)

    if player_score == 3
      prompt("you are the final winner")
      break
    elsif computer_score == 3
      prompt("computer is the final winner")
      break
    end
  end
  prompt("do you want to try again Y/N")

  try_again = Kernel.gets().chomp().downcase
  break if try_again != "y"
end
