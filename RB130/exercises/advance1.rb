fact_enumerator = Enumerator.new do |y|
  n = 0
  accumulator = 1
  loop do
    if n == 0 
      accumulator = 1
    else
      accumulator *= n
    end
    y << accumulator
    n += 1
  end
end

6.times {|index| puts "#{index}! = #{fact_enumerator.next}"}
6.times {|index| puts "#{index}! = #{fact_enumerator.next}"}
fact_enumerator.rewind
6.times {|index| puts "#{index}! = #{fact_enumerator.next}"}
fact_enumerator.each_with_index do |value, index|
  puts "#{index}! = #{value} "
  break if index == 6
end