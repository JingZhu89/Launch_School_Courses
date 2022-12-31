# P: create a simple linked list program
  # each element in the list contains data and a next method that point to the next element in the list
  # should be in a LIFO sequence
  # the linked list need to be able to be reversed and convert to and from an array
# E:
  # need a element class,
    # initialize takes 1 ore 2 arguments, if 1 then its the value of the element if it's two than the second one is the element that it's linked to
    # need a next instance method, that returns the previous element, if the element is not linked to any other element next should return nil
    # need a datum method that returns the value of the element
    # need a tail? method that returns true or false for whether the element is the first in the list
  # need a SimpleLInkedList class
    # initialize takes no argument 
    # need a size method that returns 0 when just initialized
    # need a empty? method that returns true when list just initiallized
    # need a peek method that return the last element's value or nil
    # need a head method that returns the last element in the list
    # need a push method that generates an elemnt object and add it to the list, a pushed element object is automatically linked to the previsou one
    # need a pop method that pop element from the list, return the value of that element
    # need a from_a class method that convert an array to a list
    # need a to_a instance methood that conver the list to an array
    # need a reverse method that reverse the list
  # D : array
  # A : element


require 'pry'

class Element
  
  attr_reader :datum

  def initialize(datum, linked_element = nil)
    binding.pry
    @datum = datum
    @linked_element = linked_element
  end

  def next
    @linked_element
  end

  def tail?
    !@linked_element
  end
end

class SimpleLinkedList
  attr_writer :simplelist
  def initialize
    @simplelist = []
  end
  
  def size
    @simplelist.size
  end

  def empty?
    @simplelist.size == 0
  end

  def peek
    empty? ? nil : @simplelist[-1].datum
  end

  def head
    @simplelist[-1]
  end

  def push(datum)
    if empty?
      @simplelist << Element.new(datum)
    else
      @simplelist << Element.new(datum, head)
    end
  end

  def pop
    empty? ? nil : @simplelist.pop.datum
  end

  def self.from_a(arr)
    new_list = SimpleLinkedList.new
    arr.to_a.reverse.each do |datum|
      new_list.push(datum)
    end
    new_list
  end

  def to_a
    result = []
    @simplelist.reverse.each do |element|
      result << element.datum
    end
    result
  end

  def reverse
    new_list = SimpleLinkedList.new
    datum_arr = @simplelist.map {|element| element.datum}
    datum_arr.reverse.each do |datum|
      new_list.push(datum)
    end
    new_list
  end
end

Element.new(1)
