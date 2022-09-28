# P:
# convert a given number to roman numerals
# the number is less than 3000
# E:
# need a RomanNumeral class, takes a number at construct
# number given will always be less than 3000, and are all positive integers
# need a to_roman menthod that returns the roman number as string
# 1:I 5:V, 10:X 50:L 100:C 500:D 1000:M
# 
# no error handling
# D:
# the roman numbers to num can be stored in hash/arr
# convert number to string
# A:
# quotient, remainder= number.divmod(starting from the highest)
# remainder.divmod(next number)
# 1:I 5:V, 10:X 50:L 100:C 500:D 1000:M - array high to low
# sort high to low
# number divid by each key if quotient = 4 rom << current rom + rom number else quotient * current rom

class RomanNumeral
  NUM = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 1]
  ROM = %w(M CM D C XC L X IX V I)
  def initialize(number)
    @number = number
  end

  def to_roman
    roman = ''
    remainder = @number
    NUM.each_with_index do |divider, index|
      quotient, remainder = remainder.divmod(divider)
      if quotient > 0 && quotient <= 3
        quotient.times {roman << ROM[index]}
      elsif quotient == 4
        roman << ROM[index]
        roman << ROM[index - 1]
      end
    end
    roman
  end
end