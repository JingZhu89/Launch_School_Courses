#1
arr = ['10', '11', '9', '7', '8']
arr.sort! do |a, b|
  b.to_i <=> a.to_i
end
p arr

#2
books = [
  {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]

books.sort_by! {|element| element[:published].to_i}
p books

#3
arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]
arr1[2][1][3]

arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]
arr2[1][:third][0]

arr3 = [['abc'], ['def'], {third: ['ghi']}]
arr3[2][:third][0][0]

hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}
hsh1['b'][1]

hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}
hsh2[:third].key(0)

#4
arr1 = [1, [2, 3], 4]
arr1[1][1] = 4
p arr1

arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]
arr2[2] = 4
p arr2

hsh1 = {first: [1, 2, [3]]}
hsh1[:first][2][0] = 4
p hsh1

hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}
hsh2[['a']][:a][2] = 4
p hsh2

#5
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

age_total = 0
munsters.each do |key,value|
  age_total = age_total + value["age"] if value["gender"] == "male"
end

puts age_total

#6
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |key, value|
  puts "#{key} is a #{value["age"]}-year old #{value["gender"]}"
end

#8
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
hsh.each_value do |value_array|
  value_array.each do |array_element|
    array_element.chars.each do |alphabet|
      puts alphabet if %w(a i u e o).include?(alphabet) 
    end
  end
end

#9
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
arr2 = arr.each do |sub_arr|
         sub_arr.sort! do |a, b|
           b <=> a
         end
       end
p arr2

#10
#solution1 
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
arr2 = arr.map do |hsh|
  hsh.map {|key,value| [key, value + 1]}.to_h
end 
p arr
p arr2

#solution2
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
arr2 = arr.map do |hsh|
    incremented_hash = {}
    hsh.each {|k ,v| incremented_hash[k] = v + 1}
    incremented_hash
  end
  p arr
  p arr2

#11
arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
arr2 =  arr.map do |sub_arr|
          sub_arr.select do |number|
            number % 3 == 0
          end
        end
p arr
p arr2

#12
arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
new_hash = {}
arr.each do |sub_arr|
  new_hash[sub_arr[0]] = sub_arr[1]
end

p new_hash

#13
arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]
arr2 = arr.sort_by do |sub_arr|
         sub_arr.select do |num|
           num.odd?
         end
       end
p arr2

#14
hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

new_arr = []
hsh.each_value do |sub_hsh|
  new_arr << sub_hsh[:colors].map {|color| color.capitalize} if sub_hsh[:type] == 'fruit'
  new_arr << sub_hsh[:size].upcase if sub_hsh[:type] == 'vegetable'
end

p new_arr

#15
#solution1
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
arr2 = arr.select do |sub_hsh|
         start = true
         sub_hsh.each_value do |arr|
           arr.each {|number| start = false if number.odd?}
         end
         start
        end
p arr2

#solution2
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
arr2 =  arr.select do |hsh|
          hsh.all? do |_, value|
            value.all? do |number|
              number.even?
            end
          end
        end
p arr2

#16
#generate numbers and alphabets randomly for a given number of time
#concat the sets of n and a with -

SELECTION_ARRAY = ("a".."z").to_a + ("0".."9").to_a
LENGTH_ARRAY = [8, 4, 4, 4, 12]

def section(number)
  n = 0
  str = ''
  while n < number
    str << SELECTION_ARRAY.sample
    n = n + 1
  end
  str
end

def generate_UUID()
  uuid = ''
  n = 0
  loop do
    break if n == LENGTH_ARRAY.size
    uuid << section(LENGTH_ARRAY[n])
    if n < LENGTH_ARRAY.size - 1
      uuid << "-"
    end
    n += 1
  end
  uuid
end

puts generate_UUID
