module Towable
  def can_tow?(pounds)
    pounds < 2000
  end
end

class Vehicles
  @@number_of_objects = 0

  attr_reader :year, :model
  attr_accessor :color, :current_speed

  def initialize(year, model, color)
    @year = year
    self.color = color
    @model = model
    self.current_speed = 0
    @@number_of_objects += 1
  end

  def self.number_of_vehicles
    puts "#{@@number_of_objects} vehicles has been created"
  end


  def speedup(speed)
    self.current_speed = self.current_speed + speed
  end

  def brake(speed)
    self.current_speed = self.current_speed - speed
  end

  def shutoff
    self.current_speed = 0
  end

  def print_current_speed
    puts  "Your current speed is #{self.current_speed}"
  end

  def spray_paint(color)
    self.color = color
  end

  def self.gasmilage(gallon, miles)
    gallon/miles
  end

  def age
    puts "this vehicle is #{years_old} years old"
  end

  private

  def years_old
    Time.now.year - self.year
  end

end

class MyCar < Vehicles
  MY_CAR = 'for going places'

  def to_s
    "this car is a #{self.color} #{self.year} #{self.model}"
  end

end

class MyTruck < Vehicles
  include Towable
  MY_TRUCK = 'for gardening'
  def to_s
    "this truck is a #{self.color} #{self.year} #{self.model}"
  end

end




lumina = MyCar.new(1997, 'chevy lumina', 'white')
lumina.speedup(20)
lumina.print_current_speed

puts lumina.color

puts lumina.year
lumina.spray_paint('silver')
puts lumina.color
puts MyCar.gasmilage(100,20)
my_car = MyCar.new(2017,'subaru crosstrek', 'white')
puts lumina
puts my_car
my_truck = MyTruck.new(2021,'tesla truck', 'silver')
Vehicles.number_of_vehicles
puts my_truck.can_tow?(100)
puts MyTruck.ancestors
lumina.age



class Student
  attr_accessor :name
  def initialize(name, grade)
    self.name = name
    @grade = grade
  end
  
  def better_grade_than?(student)
    self.grade > student.grade
  end


  protected

  attr_reader :grade



end

bob = Student.new('Bob', 100)
adam = Student.new('Adam', 80)

puts adam.better_grade_than?(bob)


class Cat
end

whisker = Cat.new

class Animal
  def initialize(name)
    @name = name
  end

  def speak
    puts sound
  end

  def sound
    "#{@name} says "
  end
end

class Cow < Animal
  def sound
    super + "moooooooooooo!"
  end
end

daisy = Cow.new("Daisy")
puts daisy.speak

class Person
  attr_writer :first_name, :last_name

  def full_name
    @first_name + ' ' + @last_name
  end
end

mike = Person.new
mike.first_name = 'Michael'
mike.last_name = 'Garcia'
p mike.full_name # => 'Michael Garcia'


class Student
  attr_accessor :name, :grade

  def initialize(name)
    @name = name
    @grade = nil
  end

  def change_grade(new_grade)
    self.grade = new_grade
  end

end

priya = Student.new("Priya")
priya.change_grade('A')
p priya.grade # => "A"