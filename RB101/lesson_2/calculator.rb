require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')

LANGUAGE = "en"

def messages(message, lang = 'en')
  MESSAGES[lang][message]
end

def prompt(message)
  Kernel.puts("=> #{message}")
end

def integer?(number)
  number.to_i().to_s() == number
end

def float?(number)
  number.to_f().to_s() == number
end

def valid_number?(number)
  integer?(number) || float?(number)
end

def operation_to_message(op)
  word = case op
         when "1"
           "Adding"
         when "2"
           "Subtracting"
         when "3"
           "multiplying"
         when "4"
           "dividing"
         end
  word
end

prompt(messages("welcome", LANGUAGE))
name = ''
loop do
  name = Kernel.gets().chomp()
  if name.empty?
    prompt(messages("valid_name", LANGUAGE))
  else
    break
  end
end

prompt("hello #{name}!")

loop do
  number1 = ''
  loop do
    prompt("please enter a number")
    number1 = Kernel.gets().chomp()

    if valid_number?(number1)
      break
    else prompt("invalid number")
    end
  end

  number2 = ''
  loop do
    prompt("please enter another number")
    number2 = Kernel.gets().chomp()

    if valid_number?(number2)
      break
    else prompt("invalid number")
    end
  end

  operator_prompt = <<-MSG
    choose a operator
    1) add
    2) subtract
    3) multiply
    4) divide

  MSG

  prompt(operator_prompt)

  operator = ''
  loop do
    operator = Kernel.gets().chomp()
    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt("please enter a valid operator")
    end
  end

  prompt("#{operation_to_message(operator)}!")

  answer = case operator
           when "1"
             number1.to_i + number2.to_i
           when "2"
             number1.to_i - number2.to_i
           when "3"
             number1.to_i * number2.to_i
           when "4"
             number1.to_f / number2.to_f
           end

  prompt("The result is #{answer}")

  prompt("do you want to try again? Y to try again")
  user_input = Kernel.gets().chomp()
  break unless user_input.downcase.start_with?("y")
end

prompt("thank you for using the calculator")
