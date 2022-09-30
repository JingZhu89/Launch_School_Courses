# P create a custom data sturcture, all element sare numb ers
# E
  # need a CustomSet class that takes 0 or 1 argument
  # need a contains? method that takes 1 argument and check if a certain element contains that argument
  # subset that checks if a set is a subset of another set
  # disjoint? check if two sets have any overlapes
  # ...
# D array

require "pry"

class CustomSet
  attr_reader :arr
  def initialize(arr=[])
    @arr = arr.uniq
  end

  def empty?
    @arr.empty?
  end

  def contains?(element)
    @arr.include?(element)
  end

  def subset?(bigger_set)
    size = @arr.size
    return true if empty?
    big = bigger_set.arr
    big.each_with_index do |_, index|
      return true if big.slice(index, size) == @arr
    end
    false
  end

  def disjoint?(other_set)
    @arr.each do |element|
      return false if other_set.contains?(element)
    end
    true
  end

  def eql?(other_set)
    other_set.arr.sort == @arr.sort
  end

  alias_method :==, :eql?

  def add(element)
    @arr << element if !self.contains?(element)
    self
  end

  def intersection(other_set)
    intersect = CustomSet.new
    other_arr = other_set.arr
    @arr.each do |element|
      intersect.add(element) if other_set.contains?(element)
    end
    intersect
  end

  def difference(other_set)
    new_set = CustomSet.new
    other_arr = other_set.arr
    @arr.each do |element|
      new_set.add(element) if !other_set.contains?(element)
    end
    new_set
  end

  def union(other_set)
    new_set = CustomSet.new
    other_arr = other_set.arr
    all = (other_arr + @arr).uniq
    all.each do |element|
      new_set.add(element)
    end
    new_set
  end

end
