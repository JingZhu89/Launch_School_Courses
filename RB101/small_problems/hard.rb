=begin
# madlibs
ADJECTIVES = %w(quick lazy sleepy ugly)
NOUNS = %w(fox dog head leg)
VERBS = %w(jumps lifts bites licks)
ADVERBS = %w(easily lazily noisily excitedly)

File.open('madlibs.txt') do |file|
  file.each do |line|
    puts format(line, noun:      NOUNS.sample,
                      adverb:    ADVERBS.sample,
                      verb:      VERBS.sample,
                      adjective: ADJECTIVES.sample)
  end
end


# seeing starts
# " " * 0 + * + " " * ( num -3 )/2 + * reverse

def star(num)
  space_before_star = 0
  space_between_star = (num - 3)/2
  left = " " * space_before_star + "*" + " " * space_between_star
  right = left.reverse
  loop do
    left = " " * space_before_star + "*" + " " * space_between_star
    right = left.reverse
    puts left + "*" + right
    break if space_between_star == 0
    space_before_star += 1
    space_between_star -= 1
  end

  puts "*" * num

  loop do
    left = " " * space_before_star + "*" + " " * space_between_star
    right = left.reverse
    puts left + "*" + right
    break if space_before_star == 0
    space_before_star -= 1
    space_between_star += 1
  end

end

def print_row(grid_size, distance_from_center)
  number_of_spaces = distance_from_center - 1
  spaces = " " * number_of_spaces
  row = Array.new(3, "*").join(spaces)
  row_centered = row.center(grid_size)
end

def star(grid_size)
  max_distance_from_center = (grid_size - 1)/2
  max_distance_from_center.downto(1) do |distance|
    puts print_row(grid_size, distance)
  end
  puts "*" * grid_size
  1.upto(max_distance_from_center) do |distance|
    puts print_row(grid_size, distance)
  end
end

star(9)


# Transpose 3x3
def transpose(matrix)
  new_matrix = [[],[],[]]
  matrix.each_with_index do |sub_arr, outer_index|
    sub_arr.each_with_index do |element, inner_index|
      new_matrix[inner_index][outer_index] = element
    end
  end
  new_matrix
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

def transpose!(matrix)
  n = 0
  arr_column = matrix[0].size
  arr_row = matrix.size
  0.upto(arr_row - 1) do |row_index|
    n.upto(arr_column - 1) do |column_index|
      matrix[row_index][column_index], matrix[column_index][row_index] = matrix[column_index][row_index], matrix[row_index][column_index]
    end
    n += 1
  end
  matrix
end


def transpose(matrix)
  arr_column = matrix[0].size
  arr_row = matrix.size
  result = []
  0.upto(arr_row - 1) do |row_index|
    0.upto(arr_column - 1) do |column_index|
      if result[column_index]
        result[column_index] << matrix[row_index][column_index]
      else 
        result << [matrix[row_index][column_index]]
      end
    end
    n += 1
  end
  result
end


matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose!(matrix)
p matrix

p transpose([[1, 2, 3, 4]]) #== [[1], [2], [3], [4]]
p transpose([[1], [2], [3], [4]]) #== [[1, 2, 3, 4]]
p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) #==
 # [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
p transpose([[1]]) == [[1]]

# Rotating Matrices
def rotate90(matrix)
  arr_column = matrix[0].size
  arr_row = matrix.size
  result = []
  (arr_row - 1).downto(0) do |row_index|
    0.upto(arr_column - 1) do |column_index|
      if result[column_index]
        result[column_index] << matrix[row_index][column_index]
      else 
        result << [matrix[row_index][column_index]]
      end
    end
    n += 1
  end
  result
end

def rotate(degree, matrix)
  case degree
  when 90 then matrix = rotate90(matrix)
  when 180 then 2.times{matrix = rotate90(matrix)}
  when 270 then 3.times{matrix = rotate90(matrix)}
  when 360 then 4.times{matrix = rotate90(matrix)}
  end
  matrix
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

new_matrix1 = rotate90(matrix1)
new_matrix2 = rotate90(matrix2)
new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
p new_matrix3 == matrix2

p new_matrix4 = rotate(360, matrix2)

# fix the bug
def my_method(array)
if array.empty?
  []
elsif array.size != 1
  array.map do |value|
    value * value
  end
else
  [7 * array.first]
end
end

p my_method([])
p my_method([3])
p my_method([3, 4])
p my_method([5, 6, 7])

# Merge Sorted Lists

def merge2(arr1, arr2)
  arr1_checking_index = 0
  arr2_checking_index = 0
  result = []
  loop do 
    if arr2[arr2_checking_index].nil? && arr1[arr1_checking_index].nil?
      break
    elsif arr2[arr2_checking_index].nil? && !arr1[arr1_checking_index].nil?
      result << arr1[arr1_checking_index]
      arr1_checking_index += 1
    elsif arr1[arr1_checking_index].nil? && !arr2[arr2_checking_index].nil?
      result << arr2[arr2_checking_index] 
      arr2_checking_index += 1
    elsif arr1[arr1_checking_index] < arr2[arr2_checking_index]
      result << arr1[arr1_checking_index]
      arr1_checking_index += 1
    elsif arr1[arr1_checking_index] > arr2[arr2_checking_index]
      result << arr2[arr2_checking_index] 
      arr2_checking_index += 1
    end
  end
  result
end


def merge(arr1, arr2)
  result = []
  arr2_starting_index = 0
  arr2_ending_index = arr2.size - 1 
  arr1.each do |value|
    while arr2_starting_index < arr2.size && arr2[arr2_starting_index] < value
        result << arr2[arr2_starting_index]
        arr2_starting_index += 1
    end
    result << value
  end
  result.concat(arr2[arr2_starting_index..-1])
end
p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]



# Merge Sort

def merge_sort(arr)
  return arr if arr.size == 1

  sub_arr1 = arr[0...arr.size / 2]
  sub_arr2 = arr[arr.size/2...arr.size]

  sub_arr1 = merge_sort(sub_arr1)
  sub_arr2 = merge_sort(sub_arr2)

  merge(sub_arr1, sub_arr2)
end
=end

def egyptian(num)
  egyptian = []
  remainder = num
  n = 1
  loop do 
    if remainder - Rational(1, n) >= 0
      remainder = remainder - Rational(1, n)
      egyptian << n
    end
    break if remainder == 0
    n += 1
  end
  egyptian
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))  

def unegyptian(arr)
  sum = 0
  arr.each do |num|
    sum += Rational(1, num)
  end
  sum
end

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)

