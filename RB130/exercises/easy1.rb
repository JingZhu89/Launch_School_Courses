# 1
class Tree
  include Enumerable
  def each

  end
end

# 2
def compute(arg)
  block_given? ? yield(arg) : 'Does not compute.'
end

p compute(3) {|num| num + 5 + 3 } == 11
p compute('c') {|letter| letter + 'a' + 'b' } == 'cab'
p compute(8) == 'Does not compute.'

# 3
def missing(sorted_arr)
  complete_arr = (sorted_arr[0]..sorted_arr[-1]).to_a
  complete_arr - sorted_arr
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

# 4
def divisors(num)
  result = []
  max_search_num = Math.sqrt(num).ceil
  (1..max_search_num).to_a.each do |n| 
    if num % n == 0
      result << n
      result << (num / n)
    end
  end
  result.uniq
end

p divisors(1)
p divisors(7)
p divisors(12)
p divisors(98)
p divisors(99400891) 

# 5
ROT1 = ('a'..'m').to_a
ROT2 = ('n'..'z').to_a
ROT3 = ('A'..'M').to_a
ROT4 = ('N'..'Z').to_a

def decipers(string)
  string.chars.map {|letter| swap(letter)}.join
end

def swap(letter)
  case letter
  when *ROT1 then ROT2[ROT1.index(letter)]
  when *ROT2 then ROT1[ROT2.index(letter)]
  when *ROT3 then ROT4[ROT3.index(letter)]
  when *ROT4 then ROT3[ROT4.index(letter)]
  else
   letter
  end
end

str = <<HEREDOC
Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu
HEREDOC

puts decipers(str)

# 6
def any?(arr)
  arr.each do |element|
    return true if yield(element)
  end
  false
end

p any?([1, 3, 5, 6]) { |value| value.even? } == true
p any?([1, 3, 5, 7]) { |value| value.even? } == false
p any?([2, 4, 6, 8]) { |value| value.odd? } == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| true } == true
p any?([1, 3, 5, 7]) { |value| false } == false
p any?([]) { |value| true } == false

# 7
def all?(arr)
  arr.each do |element|
    return false if !yield(element)
  end
  true
end

p all?([1, 3, 5, 6]) { |value| value.odd? } == false
p all?([1, 3, 5, 7]) { |value| value.odd? } == true
p all?([2, 4, 6, 8]) { |value| value.even? } == true
p all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p all?([1, 3, 5, 7]) { |value| true } == true
p all?([1, 3, 5, 7]) { |value| false } == false
p all?([]) { |value| false } == true

8
def none?(arr)
  arr.each do |element|
    return false if yield(element)
  end
  true
end

def none?(arr, &block)
  !any?(arr, &block)
end


p none?([1, 3, 5, 6]) { |value| value.even? } == false
p none?([1, 3, 5, 7]) { |value| value.even? } == true
p none?([2, 4, 6, 8]) { |value| value.odd? } == true
p none?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p none?([1, 3, 5, 7]) { |value| true } == false
p none?([1, 3, 5, 7]) { |value| false } == true
p none?([]) { |value| true } == true

def one?(arr)
  ct = 0
  result = false
  arr.each do |element|
    if yield(element)
      ct += 1
      result = !result
    end
    return false if ct > 1
  end
  result
end

p one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
p one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
p one?([2, 4, 6, 8]) { |value| value.even? }    # -> false
p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
p one?([1, 3, 5, 7]) { |value| true }           # -> false
p one?([1, 3, 5, 7]) { |value| false }          # -> false
p one?([]) { |value| true }                     # -> false

def count1(arr)
  ct = 0
  arr.each {|element| ct += 1 if yield(element)}
  ct
end

def count(arr, &block)
  arr.select(&block).size
end

p count([1,2,3,4,5]) { |value| value.odd? } == 3
p count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count([1,2,3,4,5]) { |value| true } == 5
p count([1,2,3,4,5]) { |value| false } == 0
p count([]) { |value| value.even? } == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2