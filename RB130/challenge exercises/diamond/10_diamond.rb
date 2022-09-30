# P: print diamond shape fomred by letters
# E: 
  # need a diamond class
  # with a make_diamond instance method that takes one letter as argument, the letter specifies the lagest line of the diamond
  # all diamonds start with A at the top
# D: array of letters for iteration
# A: 
  # number of lines in the dimond = A..letter .size * 2 - 1
  # the length of each line should be the same as the number of lines
  # first line is just 'A' centered by length
  # starting from second line, two letters with spaces in between, number of spaces increment by 2 in each line
  # reverse

  class Diamond
    def self.make_diamond(letter)
      top = asc_lines(letter)
      bottom = top.reverse[1..-1]
      all_lines = top + bottom
      width = all_lines.size
      all_lines.map! {|line| line.center(width, ' ') }
      all_lines.join("\n") + ("\n")
    end
  
    def self.asc_letters(letter)
      ('A'..letter).to_a
    end

    def self.line(letter, index)
      if letter == 'A'
        'A'
      else
        letter + ' ' * ((index - 1) * 2 + 1) + letter
      end
    end

    def self.asc_lines(letter)
      asc_arr = asc_letters(letter)
      lines = []
      asc_arr.each_with_index {|l, i| lines << line(l, i)}
      lines
    end
  end
  