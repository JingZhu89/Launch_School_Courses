
let game = {
  words: [],
  currentGame: [],
  currentWord: '',
  message,
  hp: 0,
  spaces,
  guesses,
  apples,
  randomWord() {
    let len = this.currentGame.length;
    let randomIndex = Math.floor(Math.random() * len);
    let word = this.currentGame[randomIndex];
    this.currentGame.splice(this.currentGame.indexOf(word),1);
    return word
  },
  startNewGame() {
    //get another randomword
    //reset hp
    //reset spaces
    //reset guesses
    //reset message
    this.currentWord = this.randomWord();
    console.log(this.currentWord);
    this.hp = 0;
    this.createSpaces();
    this.clearSpans(this.guesses);
    this.message.textContent = '';
    this.apples.className = '';
  },
  clearSpans(element) {
    //remove all span elements from the element's children
    let spans = element.querySelectorAll('span');
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].remove();
    }
  },
  createSpaces() {
    //clear spans in spaces and create new empty spans according to number of characters in new word
    this.clearSpans(this.spaces);
    for (let i = 0; i < this.currentWord.length; i += 1) {
      let newSpan = this.createNewSpan(undefined, i)
      this.spaces.appendChild(newSpan);
    }
  },
  checkResult() {
    let guessedString = Array.from(this.getSpanInSpaces()).map(span => {
      return span.textContent
    }).join('');
    if (guessedString === this.currentWord) {
      this.message.textContent = 'Congratulations, you won'
      document.removeEventListener('keydown', this.callback);
    } if (this.hp === 6) {
      this.message.textContent = 'sorry you are out of guesses';
      document.removeEventListener('keydown', this.callback);
    }
  },
  addKeypressListener() {
    this.startNewGame();
    this.callback = this.keypressListener.bind(this)
    document.addEventListener('keydown', this.callback);
  },
  keypressListener(e) {
      this.guesses.appendChild(this.createNewSpan(e.key));
      //check if guess is right
      let position = this.currentWord.indexOf(e.key);
      if (position !== -1) {
        this.rightGuess(e.key)
      } else {
        this.wrongGuess();
      }
      this.checkResult();
  },
  wrongGuess() {
    this.hp += 1;
    this.apples.className = 'guess_' + this.hp.toString();
  },
  rightGuess(letter) {
    for (let i = 0; i < this.currentWord.length; i += 1) {
      if (letter === this.currentWord[i]) {
        this.getSpanInSpaces(i).textContent = letter;
      }
    }
  },
  createNewSpan(text, id) {
    let newSpan = document.createElement('span');
    if (text!== undefined) {
      newSpan.textContent = text;
    };
    if (id !== undefined) {
      newSpan.setAttribute('id', `space${id}`);
    }
    return newSpan
  },
  getSpanInSpaces(id) {
    if (id === undefined) {
      return this.spaces.querySelectorAll('span');
    } else {
      return document.getElementById(`space${id}`);
    }
  },
  init(wdArray) {
    let self = this;
    document.addEventListener('DOMContentLoaded', () => {
      self.words = wdArray;
      self.currentGame = self.words.slice();
      self.spaces = document.querySelector('#spaces');
      self.guesses = document.querySelector('#guesses');
      self.apples = document.querySelector('#apples');
      self.message = document.querySelector('#message');
      document.querySelector('#replay').addEventListener('click', () => {
        if(self.currentGame.length === 0) {
          self.message.textContent = 'Sorry we ran out of words';
        } else {
          self.addKeypressListener();
        }
      })
      self.addKeypressListener();
    })

  },
}

game.init(['apples', 'pears']);

//load dom tree
//get random word
//generate the character length number of spans in the spaces div append after h2, for each span add an id that includes the index
//keydown event get the character entered
//check if it's a letter if so add a span to guess div with the letter append after h2
//check if the letter is in the word if so add the letter to the correct index position in the spaces section