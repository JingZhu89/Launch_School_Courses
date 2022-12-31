# P: generate random robot names. avoid duplication when possible
# E: need a robot class, 
  # robot name follow 2alphabet 3 digits format
  # need a getter for name
  # need a reset method
# D: store existing names in an array?
# A: random name generator at construct
# getter for name
# reset for name

class Robot
  LETTERS = ('A'..'Z').to_a
  DIGITS = ('0'..'9').to_a

  attr_reader :name
  @@existing_names = []

  def initialize
    @name = random_name
    @@existing_names << @name
  end

  def random_name
    loop do
      new_name = ''
      2.times {new_name << LETTERS.sample}
      3.times {new_name << DIGITS.sample}
      if !@@existing_names.include?(new_name) || @@existing_names.size == 26 * 26 * 10 * 10 * 10
        return new_name
      end
    end
  end

  def reset
    old_name = name
    @@existing_names -= [old_name]
    loop do
      new_name = random_name
      if new_name != old_name
        @name = new_name
        @@existing_names << new_name
        break
      end
    end
  end

  def self.existing_names
    @@existing_names
  end
end
