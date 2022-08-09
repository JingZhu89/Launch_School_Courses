# banner class
class Banner

  def initialize(message, size)
    @message = message
    @size = size
    if @size < @message.size + 2
      @size = @message.size + 2
      puts "size is too small, re-adjusting size to #{@size}"
    end
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+#{'-' * @size}+"
  end

  def empty_line
    "|#{' ' * @size}|"
  end

  def message_line
    "| #{@message.center(@size - 2,' ')} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.', 30)
puts banner

banner = Banner.new('', 0)
puts banner

#What's the Output?
class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    "My name is #{@name.upcase}."
  end
end

name = 42
fluffy = Pet.new(name)
name += 1
puts fluffy.name
puts fluffy     
puts fluffy.name 
puts name 

# Fix the Program - Books (Part 1)
class Book
  attr_reader :author, :title

  def initialize(author, title)
    @author = author
    @title = title
  end

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new("Neil Stephenson", "Snow Crash")
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

# Fix the Program - Books (Part 2)

class Book

  attr_accessor :author, :title

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new
book.author = "Neil Stephenson"
book.title = "Snow Crash"
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

# Fix the Program - Persons
class Person

  def initialize(first_name, last_name)
    self.first_name = first_name
    self.last_name = last_name
  end

  def first_name=(string)
    @first_name = string.capitalize
  end

  def last_name=(string)
    @last_name = string.capitalize
  end

  def to_s
    "#{@first_name} #{@last_name}"
  end
end

person = Person.new('john', 'doe')
puts person

person.first_name = 'jane'
person.last_name = 'smith'
puts person

# Fix the Program - Flight Data
class Flight

  def initialize(flight_number)
    @database_handle = Database.init
    @flight_number = flight_number
  end
end

# Buggy Code - Car Mileage
class Car
  attr_accessor :mileage

  def initialize
    @mileage = 0
  end

  def increment_mileage(miles)
    self.mileage = (mileage + miles)
  end

  def print_mileage
    puts mileage
  end
end

car = Car.new
car.mileage = 5000
car.increment_mileage(678)
car.print_mileage  # should print 5678

# Rectangles and Squares
class Rectangle
  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

class Square < Rectangle
  def initialize(number)
    super(number, number)
  end
end

square = Square.new(5)
puts "area of square = #{square.area}"

# Complete the Program - Cats!

class Pet
  attr_reader :name, :age
  def initialize(name, age)
    @name = name
    @age = age
  end
end

class Cat < Pet
  attr_reader :color
  def initialize(name, age, color)
    super(name,age)
    @color = color
  end

  def to_s
    "My cat #{name} is #{age} years old and has #{color} fur"
  end
end

pudding = Cat.new('Pudding', 7, 'black and white')
butterscotch = Cat.new('Butterscotch', 10, 'tan and white')
puts pudding, butterscotch


# Refactoring Vehicles

class Vehicle
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def to_s
    "#{make} #{model}"
  end

end

class Car
  WHEELS = 4
end

class Motorcycle
  WHEELS = 2
end

class Truck
  WHEELS = 6

  attr_reader :payload

  def initialize(make, model, payload)
    super(make, model)
    @payload = payload
  end

end

