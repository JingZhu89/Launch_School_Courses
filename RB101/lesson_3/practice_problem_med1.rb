#Q1
sentence = "The Flintstones Rock!"
for i in (1..10) do
  sentence = " " + sentence
  puts sentence
end

10.times {|number| puts(" " * number + "The Flintstones Rock!")}

#Q2
puts "the value of 40 + 2 is  + #{(40 + 2)}"
puts "the value of 40 + 2 is "  + (40 + 2).to_s

#Q3
def factors(number)
  divisor = number
  factors = []
  loop do
    break if divisor == 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end
  factors
end

#Q5

def fib(first_num, second_num, limit)
  while first_num + second_num < limit
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

result = fib(0, 1, 15)
puts "result is #{result}"

#Q8