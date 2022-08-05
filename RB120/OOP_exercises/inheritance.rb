=begin
# inherited year
# start the engine part 1
# only pass the year
# start the engine part 2
# towable part 1
# towable part 2

module Towable
  def tow
    puts "I can tow a trailor"
  end

end


class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end

  def start_engine
    'Ready to go!'
  end

end

class Truck < Vehicle
  include Towable

  attr_reader :bed_type

  def initialize(year, bed_type)
    super(year)
    @bed_type = bed_type
  end

  def start_engine(speed)
    super() + "Drive #{speed} please!"
  end

end

class Car < Vehicle
end


truck1 = Truck.new(1994, 'short')
puts truck1.year
puts truck1.bed_type
puts truck1.start_engine('fast')

car1 = Car.new(2006)
puts car1.year
truck1.tow
=end


module Transportation
  class Vehicle
  end

  class Car < Vehicle
  end

  class Truck < Vehicle
  end


end
