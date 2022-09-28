class Car
  attr_accessor :wheels
  def initialize
    @wheels = 4
  end
end

car1 = Car.new
car2 = Car.new
p car1 == car2