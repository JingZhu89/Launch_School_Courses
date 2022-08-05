# reading and writing
# choose the right method
# access denied
class Person
  attr_accessor :name
  attr_reader :phone_number
  
  def initialize(phone_number)
    @phone_number = phone_number
  end
end

person1 = Person.new(1234567899)
puts person1.phone_number

# comparing names
class Person
  attr_accessor :first_name
  attr_writer :last_name
  
  def first_equals_last?
    first_name == last_name
  end

  private

  attr_reader :last_name
end

person1 = Person.new
person1.first_name = 'Dave'
person1.last_name = 'Smith'
puts person1.first_equals_last?

# who is older
class Person
  attr_writer :age
  def older_than?(other)
    age > other.age
  end

  protected

  attr_reader :age

end

person1 = Person.new
person1.age = 17

person2 = Person.new
person2.age = 26

puts person1.older_than?(person2)

# guaranteed formatting
class Person
  attr_reader :name

  def name=(name)
    @name = name.capitalize
  end

end

person1 = Person.new
person1.name = 'eLiZaBeTh'
puts person1.name

# prefix the name
class Person
  attr_writer :name
  
  def name
    'Mr. ' + @name
  end

end

person1 = Person.new
person1.name = 'James'
puts person1.name

# avoid mutation
class Person

  def initialize(name)
    @name = name
  end

  def name
    @name.clone
  end

end

person1 = Person.new('James')
person1.name.reverse!
puts person1.name

# calculated age

class Person

  def age=(number)
    @age = double(number)
  end

  def age
    double(@age)
  end

  private

  def double(value)
    value * 2
  end
end

person1 = Person.new
person1.age = 20
puts person1.age


# unexpected change
class Person
  def name=(string)
    words = string.split
    @first_name = words.first
    @last_name = words.last
  end

  def name
    "#{@first_name} #{@last_name}"
  end
  
end

person1 = Person.new
person1.name = 'John Doe'
puts person1.name