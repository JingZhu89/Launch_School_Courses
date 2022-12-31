class Triangle
  def initialize(a, b, c)
    @sides = [a, b, c]
    p @sides
    raise_error
  end

  def kind
    ct = @sides.uniq.count
    case ct
    when 1 then 'equilateral'
    when 2 then 'isosceles'
    when 3 then 'scalene'
    end
  end

private

  def raise_error
    if @sides.any? {|side| !positive_number?(side)} || @sides.any? {|side| side >= (@sides).sum - side}
       raise ArgumentError, 'This is not a valid triangle'
    end
  end

  def positive_number?(num)
    num.kind_of?(Numeric) && num > 0
  end
end

