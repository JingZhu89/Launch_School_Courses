=begin
# 1
class Person
attr_accessor :name
def initialize(name)
  self.name = name
end

end


bob = Person.new('bob')
puts bob.name                  # => 'bob'
bob.name = 'Robert'
puts bob.name                  # => 'Robert'

 
# 2
class Person
  attr_accessor :last_name
  attr_reader :first_name
  def initialize(name)
    @name = name
    @first_name = name
    @last_name = ''
  end

  def name
    if @last_name == ''
      @first_name
    else
      @first_name + ' ' + @last_name
    end
  end
  
  end

bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'

=end

# 3
class Person
  attr_accessor :last_name, :first_name
  def initialize(name)
    self.name = name
  end

  def name
    "#{first_name} #{last_name}".strip
  end


  def name=(name)
    parts = name.split
    self.first_name = parts.first
    self.last_name = parts.size > 1 ? parts.last : ''
  end

  def to_s
    name
  end

end

bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'



rob = Person.new('Robert Smith')
p rob.name == bob.name

bob = Person.new("Robert Smith")
puts "The person's name is: #{bob}"


bob.name = "John Adams"
p bob.first_name            # => 'John'
p bob.last_name             # => 'Adams'