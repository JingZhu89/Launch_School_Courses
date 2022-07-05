
TENS = %w(Jack Queen King)
ACE_VALUES = [1, 11]
def total_without_ace(cards)
  sum = 0
  cards.each do |sub_arr|
    if TENS.include?(sub_arr[1])
      sum += 10
    elsif sub_arr[1] != 'Ace'
      sum += sub_arr[1].to_i
    end
  end
  sum
end

def final_total(cards)
  number_of_aces = cards.flatten.count('Ace')
  total = total_without_ace(cards) + number_of_aces * 11
  counter = 1
  loop do
    break if total <= 21 || counter > number_of_aces
    total = total - 10
    counter += 1
  end
  total
end

p final_total([["",'Ace'],["",'Ace'],["",'Ace'],["",'8']])