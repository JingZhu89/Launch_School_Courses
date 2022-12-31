let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
function allMatches(words, regex){ 
  return words.filter(function(word) {
    return regex.test(word)
  })

}