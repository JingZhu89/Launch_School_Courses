# P: given a number, determin if its perfect number. abundant number or deficient number
  # perfect number. the sum of divisors equals to the number itself
  # abundant number, the sum is greater than the number
  # deficient number. the sume is less than the original number
  # divisors are less than the number and include 1
# E:
  # perfectnumber class
  # class method called classify, takes a numebr as argumeny
  # raise standard error when pass in negative numbers
# D: array to store all the divisors
# A: 
  # find out all the divisors of a number (helper method)
    # empty array [1]
    # from 2 to number ** 0.5 if number % divisor = 1 then add the divisor and number / divisor to the array
  # sum up the divisors
  # check if the sum is more less or equal to the number itself

class PerfectNumber
  def self.classify(num)
    raise StandardError if num < 0
    aliquot_sum = find_divisors(num).sum
    if aliquot_sum > num
      'abundant'
    elsif aliquot_sum == num
      'perfect'
    else
      'deficient'
    end
  end

  # private

  def self.find_divisors(num)
    divisors = [1]
    sqr_root = (num ** 0.5).floor
    2.upto(sqr_root) do |divisor|
      quotient, remainder = num.divmod(divisor)
      if remainder == 0
        divisors << divisor << quotient
      end
    end
    divisors
  end
end