# P: given a number and a set of numbers, sum all the multiples of the numbers in the set that are less than (not include) the number
# E: need a SumOfMultiples class,
  # there is a to class method and instance method
  # when calling the class method, the defaut of the set is 3 and 5
  # when creating an instance of the class, need to pass in the set as argument at construct
  # both the instance and class to method that takes an integer argument to sum the multiples
# D: needs two arrays to store the set, one is an instance variable and one is class variable
# A: 
# class variable of array [3, 5]
#construct: 
  # initialize method takes numbers as argment
  # numbers stored as an array @
  # a class helper method that calculate all the multiples
    # start with an empty array
    # (helper) map and find all the max_multiplier of each number in the set ( number / set number ). floor
    # for each number in the set, calculate 1.upto(max multipler) index * set number add to array
    # take uniq numbers only
  # sum all numbers in the array

class SumOfMultiples
  @@default_set = [3, 5]
  def initialize(*num)
    @set = num
  end

  def self.to(num)
    multiples(@@default_set, num).sum
  end

  def to(num)
    self.class.multiples(@set,num).sum
  end
   

  def self.multiples(array, max_num)
    multiples = []
    multipliers = max_multipliers(array, max_num)
    array.each_with_index do |num, index|
      1.upto(multipliers[index]) do |multiplier|
        multiples << num * multiplier
      end
    end
    multiples.uniq
  end

  def self.max_multipliers(array, max_num)
    array.map do |num| 
      if max_num % num == 0
        (max_num / num) - 1
      else
        (max_num / num).floor
      end
    end
  end
end
