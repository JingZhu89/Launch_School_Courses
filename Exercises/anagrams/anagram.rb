#P: given a word and a list. find all anagrams of that word from the list
#E: need a Anagram class, takes 1 argument at construct, the argument is a word, no validation necessary
    #need a match method that takes an array as argument
    #returns an array of anagrams of the word
    #return an empty array if no anagram is found
    #not case sensitive
    #identical words are not anagrams
#D: array
#A: helper method that checks if a word is an anagram
    #iterate through the array and find all words that are anagrams
    #use the select method
class Anagram
  def initialize(word)
    @word = word
  end

  def match(arr)
    arr.select {|word| anagram?(word)}
  end

  private
  def anagram?(word)
    @word.downcase.chars.sort == word.downcase.chars.sort && word.downcase != @word.downcase
  end
end
