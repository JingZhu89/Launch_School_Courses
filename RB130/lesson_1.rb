# times method
def times(num)
  index = 0
  loop do
    yield(index)
    index += 1
    break if index == num
  end
end

times(5) {|num| puts num}

# each method
def each(arr)
  index = 0
  size = arr.size
  loop do
    yield(arr[index])
    index +=1
    break if index == size
  end
  arr
end

arr = [1, 2, 3, 4, 5, 6]
each(arr) {|element| puts element + 1}

# select method
def select(arr)
  index = 0
  size = arr.size
  new_arr = []
  loop do
    if yield(arr[index])
      new_arr << arr[index]
    end
    index +=1
    break if index == size
  end
  new_arr
end

p (select(arr) {true})

# reduce method
def reduce(arr, optional = omitted = true)
  if omitted
    index = 1
    accumulator = arr[0]
  else
    index = 0
    accumulator = optional
  end
  size = arr.size
  loop do
    accumulator = yield(accumulator, arr[index])
    index +=1
    break if index == size
  end
  accumulator
end

puts (reduce(arr, 1) {|acc, num| acc + num})
p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']