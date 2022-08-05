=begin
# generic greeting
# hello chole
# identify yourself
# generic greeting part 2
# counting cats
# colorful cat
# identify yourself part 2
class Cat
  COLOR = 'purple'

  attr_accessor :name

  @@number_of_cats = 0

  def initialize(name)
    @name = name
    @@number_of_cats += 1
  end

  def rename(new_name)
    self.name = new_name
  end

  def identify
    self
  end

  def personal_greeting
    puts "Hello! My name is #{name}"
  end

  def greet
    puts "Hello! My_name is #{name} and I'm a #{COLOR} cat!"
  end

  def self.generic_greeting
    puts "Hello! I'm a cat"
  end

  def self.total
    puts @@number_of_cats
  end

  def to_s
    "I'm #{name}!"
  end

end



kitty = Cat.new('Sophie')
p kitty.name
kitty.rename('Chloe')
p kitty.name
p kitty.identify
kitty.personal_greeting
Cat.generic_greeting
p kitty.class
kitty.class.generic_greeting
kitty1 = Cat.new('mao1')
kitty2= Cat.new('mao2')
Cat.total
kitty.greet
puts kitty

=end

# public secret
# private secret
# protected secret
class Person
  attr_writer :secret

  def share_secret
    puts secret
  end

  def compare_secret(another_person)
    secret == another_person.secret
  end

  protected

  attr_reader :secret
end

person1 = Person.new
person1.secret = 'Shh.. this is a secret!'

person2 = Person.new
person2.secret = 'Shh.. this is a different secret!'

puts person1.compare_secret(person2)

