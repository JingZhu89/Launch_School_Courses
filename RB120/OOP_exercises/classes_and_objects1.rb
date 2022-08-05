# find the class

puts "Hello".class
puts 5.class
puts [1, 2, 3].class

# create the class
# create the object
# what are you
# hello sophie part 1 and 2
# reader writer accessor
# walk the cat
module Walkable
  def walk
    puts "let's go for a walk"
  end
end


class Cat
  include Walkable

  attr_accessor :name
  
  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}"
  end

end

kitty = Cat.new('Sophie')
kitty.greet
p kitty.name
kitty.name = 'luna'
kitty.greet
p kitty.name
kitty.walk