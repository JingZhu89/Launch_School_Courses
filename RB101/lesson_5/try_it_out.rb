def remove_evens!(arr)
  cloned_arr = arr.dup
  cloned_arr.each do |num|
    if num % 2 == 0
      arr.delete(num)
    end
  end
  arr
end


def remove_evens2!(arr)
  arr.partition{|n| n.even?}.drop(1).flatten!
end

p remove_evens!([1,1,2,3,4,6,8,9])
p remove_evens2!([1,1,2,3,4,6,8,9])