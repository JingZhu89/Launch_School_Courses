# ask for user input
# validate user input
# calculate

require "yaml"
MESSAGES = YAML.load_file("mortgage_message.yml")

def prompt(message)
  Kernel.puts("=> #{message}")
end

def float_validation(number)
  number.to_f.to_s == number && number.to_f > 0
end

def integer_validation(number)
  number.to_i.to_s == number && number.to_i > 0
end

def number_validation(number)
  float_validation(number) || integer_validation(number)
end

loan_amount = ''
loop do
  prompt(MESSAGES["loan_amount"])
  loan_amount = Kernel.gets().chomp()
  break if number_validation(loan_amount)
  prompt(MESSAGES["invalid_number"])
end

apr = ''
loop do
  prompt(MESSAGES["apr"])
  apr = Kernel.gets().chomp()
  break if number_validation(apr)
  prompt(MESSAGES["invalid_number"])
end

monthly_interest_rate = apr.to_f / 12 / 100

loan_duration = ''
loop do
  prompt(MESSAGES["loan_duration"])
  loan_duration = Kernel.gets.chomp
  break if number_validation(loan_duration)
  prompt(MESSAGES["invalid_number"])
end

loan_duration_in_months = loan_duration.to_i * 12

monthly_payment = loan_amount.to_f * 
                  (monthly_interest_rate / 
                  (1 - (1 + monthly_interest_rate)**(- loan_duration_in_months)))

puts "monthly payment is #{monthly_payment}"

