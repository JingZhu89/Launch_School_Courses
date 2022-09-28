# P:
  # given a word, calculate the scrabble score of the word
# E:
  # need a Scrabble class, it can take string, emty string, string with white space character or nil
  # need a score method that calculate the scrabble score, returns 0 for emty str. white space and nil
  # scrabble score is not case sensitive
  # needs a class score method that takes the word as argument and does the same thing
# D:
  # some kind of collection to store the value of diffrent letters
# A:
  # construct: create a instance variable to store the word, change to uppercase
  # score method, start with score 0 iterate through each letter in the word and find the value and add to score, return 0 if nil

class Scrabble
  VALUES = {
  %w(A E I O U L N R S T) => 1,
  %w(D G) => 2,
  %w(B C M P) => 3,
  %w(F H V W Y)	=> 4,
  %w(K) => 5,
  %w(J X) =>	8,
  %w(Q Z) =>	10
  }

  def initialize(word)
    @word = word
  end

  def score
    scrabble_score = 0
    return 0 if @word == nil
    cap_word = @word.upcase
    cap_word.chars.each do |letter|
      VALUES.each do |k, v|
        if k.include?(letter)
          scrabble_score += v
        end
      end
    end
    scrabble_score
  end

  def self.score(word)
    self.new(word).score
  end
end
