
class Pet
  def jump
    'jumping!'
  end

  def run
    'running!'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end

  def fetch
    'fetching!'
  end
end

class BullDog < Dog
  def swim
    "can't swim!"
  end
end

class Cat < Pet
  def speak
    'meow!'
  end
end


teddy = Dog.new
puts teddy.speak           # => "bark!"
puts teddy.swim           # => "swimming!"

bull = BullDog.new
puts bull.speak
puts bull.swim

kitty = Cat.new
puts kitty.speak
puts kitty.jump

p BullDog.ancestors

