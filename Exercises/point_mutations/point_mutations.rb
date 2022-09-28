# p: 
# we are comparing two DNC starnds, and look for the differences. 
# the number of differences is the hamming distance
# we can have 2 DNA strands of different length, and we should use the shorter one as base for comparison

# e:
# we need to have a DNA class
# the DNA class accept 1 argument. the argument can be string or empty string.
# we need to havve a hamming distance method that accept 1 argument. it can be string or empty string
# the haming distance method compares the difference between the DNA and the comparing DNA
# comparison always start from the begining of the string

# d:
# data is stored as string
# result of hammin distance is an integer

# a:
# DNA class should have a instance variable to store the DNA
# hamming distance method compares the argument with this instance variable from the begining 
# comparison ends when where the shorter string ends
# need to be able to handle empty string

class DNA
  def initialize(strand)
    @dna = strand
  end

  def hamming_distance(comparing_strand)
    hamming_distance = 0
    comparing_distance = [comparing_strand.length, @dna.length].min
    n = 0
    while n < comparing_distance
      if @dna[n] != comparing_strand[n]
        hamming_distance +=1
      end
      n += 1
    end
    hamming_distance
  end
end
