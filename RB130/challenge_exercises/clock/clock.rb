# P: create a clock, can add minutes and subtract minutes. different objects of the same time a are ==
# E: a clock class. no argument at construct
    # an class method called at, that set the time, can take 1 or 2 argument when 1 hour. 
      #when two hour and minutes
    # + method that adds minutes return object itself
    # - method that subtract minutes return object itself
    # to_s method that convert the time to string
    # == method if the hour and minute are the same, return strue
# D: hour in int and minute in int
# A: at(hour, minute = 0) at is a class method but returns an object

class Clock
  def initialize(hr, min)
    @hour = hr
    @minute = min
  end
  
  def self.at(hr, min = 0)
    self.new(hr, min)
  end

  def +(min)
    additional_hrs, @minute = (@minute + min).divmod(60)
    @hour = (@hour + additional_hrs) % 24
    self
  end

  def -(min)
    aday = 24 * 60
    new_min = -min
    loop do 
      new_min += aday
      break if new_min >= 0
    end
    self + new_min
    self
  end

  def ==(other_clock)
    @hour == other_clock.hour && @minute == other_clock.minute
  end

  def to_s
    "#{format("%02d", @hour)}:#{format("%02d", @minute)}"
  end

  protected
  attr_reader :hour, :minute
end
