# def compare(str)
#   result = ''
#   result += "Before: #{str} \n"
#   result += "After: #{yield(str)}"
# end

# puts compare('hi') { |word| word.upcase }


# def select(arr)
#   n = arr.size
#   counter = 0
#   result = []
#   while counter < n
#     if yield(arr[counter])
#       result << arr[counter]
#     end
#     counter +=1 
#   end
#   result
# end

# array = [1, 2, 3, 4, 5]

# p select(array) { |num| num.odd? }      # => [1, 3, 5]
# p select(array) { |num| puts num }      # => [], because "puts num" returns nil and evaluates to false
# p select(array) { |num| num + 1 }       # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true

# def reduce(arr, default = omitted = true)
#   result = (omitted ? arr[0] : default)
#   n = arr.size
#   counter = (omitted ? 1 : 0)
#   while counter < n
#     result = yield(result, arr[counter])
#     counter += 1
#   end
#   result
# end
# array = [1, 2, 3, 4, 5]

# p reduce(array) { |acc, num| acc + num }                    # => 15
# p reduce(array, 10) { |acc, num| acc + num }                # => 25
# # p reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass
# p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
# p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']
# p reduce([1, 2, 3, 4, 5]) { |acc, num| acc + num }                    # => 15
# p reduce([1, 2, 3, 4, 5], 10) { |acc, num| acc + num }     

# def call_me(some_code)
#   some_code.call    # call will execute the "chunk of code" that gets passed in
# end


# # name = "Robert"
# chunk_of_code = Proc.new {name}

# def name
#   puts 'Robter'
# end

# call_me(chunk_of_code)

# def true_or_false(&block)
#   puts "The block is #{block.call}"
# end

# true_or_false { 5 > 8 }

# p (1..4).inject(10) {|sum, n| sum * n }  

# in temp.rb
require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_first_test
    assert true
  end
end