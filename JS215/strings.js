// let firstName = 'Jing';
// let lastName = 'Zhu';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// console.log(firstName.concat(lastName));
// let name = fullName.split(' ');
// console.log(name);

// let language = 'JavaScript';
// let idx = language.indexOf('S');
// console.log(idx);

// let charCode = language.charCodeAt(idx)
// console.log(charCode);

// console.log(String.fromCharCode(charCode));

// let lastIdx = language.lastIndexOf('a');
// console.log(lastIdx);

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentence = fact1 + ' ' + fact2[0].toLowerCase() + fact2.slice(1);
// console.log(compoundSentence);

// let pi = 22 / 7
// pi = String(pi);
// console.log(pi.lastIndexOf('14'));

// let boxNumber = (356).toString();
// console.log(boxNumber);

// boxNumber = parseInt(boxNumber, 10)
// console.log(typeof boxNumber)

// let rlSync = require('readline-sync');
// let myname = rlSync.question('What is your name?\n');
// if (myname[myname.length - 1] === '!') {
//   console.log('HELLO ' + myname.toUpperCase());
// } else {
//   console.log('Hello ' + myname);
// }

// function reverse(string) {
//   return string.split('').reverse().join('')
// }

// console.log(reverse('hello'));                  // returns "olleh"
// console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"

// function acronym(string) {
//   return string.replace(/[^a-z ]/ig,' ').split(' ').reduce((result, char) => {
//     if (!char) {
//       return result;
//     } else {
//       return result + char[0].toUpperCase();
//     }
//   },'')
// }

// console.log(acronym('Portable Network Graphics'));                  // "PNG"
// console.log(acronym('First In, First Out'));                        // "FIFO"
// console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
// console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
// console.log(acronym('Hyper-text Markup Language'));                 // "HTML"


// function isValidEmail(email) {
//   regex = /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i
//   return !!(email.match(regex));
// }

// console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
// console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
// console.log(isValidEmail('foo@baz.com'));             // returns true
// console.log(isValidEmail('foo@baz.ph'));              // returns true
// console.log(isValidEmail('HELLO123@baz'));            // returns false
// console.log(isValidEmail('foo.bar@baz.to'));          // returns false
// console.log(isValidEmail('foo@baz.'));                // returns false
// console.log(isValidEmail('foo_bat@baz'));             // returns false
// console.log(isValidEmail('foo@bar.a12'));             // returns false
// console.log(isValidEmail('foo_bar@baz.com'));         // returns false
// console.log(isValidEmail('foo@bar.....com'));         // returns false

// function isBalanced(str) {
//   accu = 0
//   arr = str.split('');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === '(') {
//       accu += 1;
//     } else if (arr[i] === ')') {
//       accu -= 1;
//     }
//     if (accu < 0) return false; 
//   }
//   if (accu !== 0) return false;
//   return true;
// }

// console.log(isBalanced('What (is) this?'));        // true
// console.log(isBalanced('What is) this?'));         // false
// console.log(isBalanced('What (is this?'));         // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));                   // true
// console.log(isBalanced(')Hey!('));                 // false
// console.log(isBalanced('What ((is))) up('));       // false

// let textExcerpt = 'To be or not to be-that is the question:\n' +
//   'Whether \'tis nobler in the mind to suffer\n' +
//   'The slings and arrows of outrageous fortune,\n' +
//   'Or to take arms against a sea of troubles,\n' +
//   'And, by opposing, end them. To die, to sleep-\n' +
//   'No more-and by a sleep to say we end\n' +
//   'The heartache and the thousand natural shocks\n' +
//   'That flesh is heir to-\'tis a consummation\n' +
//   'Devoutly to be wished. To die, to sleep-\n' +
//   'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
//   'For in that sleep of death what dreams may come,\n' +
//   'When we have shuffled off this mortal coil,\n' +
//   'Must give us pause. There\'s the respect\n' +
//   'That makes calamity of so long life.\n' +
//   'For who would bear the whips and scorns of time,\n' +
//   'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
//   'The pangs of despised love, the law’s delay, [F: disprized]\n' +
//   'The insolence of office, and the spurns\n' +
//   'That patient merit of the unworthy takes,\n' +
//   'When he himself might his quietus make\n' +
//   'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
//   'To grunt and sweat under a weary life,\n' +
//   'But that the dread of something after death,\n' +
//   'The undiscovered country from whose bourn\n' +
//   'No traveler returns, puzzles the will\n' +
//   'And makes us rather bear those ills we have\n' +
//   'Than fly to others that we know not of?\n' +
//   'Thus conscience does make cowards of us all,\n' +
//   'And thus the native hue of resolution\n' +
//   'Is sicklied o\'er with the pale cast of thought,\n' +
//   'And enterprises of great pitch and moment, [F: pith]\n' +
//   'With this regard their currents turn awry, [F: away]\n' +
//   'And lose the name of action.-Soft you now,\n' +
//   'The fair Ophelia.-Nymph, in thy orisons\n' +
//   'Be all my sins remembered';

// let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
// let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// function sentiment(text) {
//   let arr = text.replace(/\s/g,' ').replace(/[^a-z ]/ig,'').split(' ');
//   let positives = countWords(positiveWords, arr);
//   let negatives = countWords(negativeWords, arr);
//   output(positives, negatives);
// }

// function countWords(words, textArr) {
//   let result = [];
//   textArr.forEach(word => {
//     word = word.toLowerCase();
//     if (words.includes(word)) {
//       result.push(word);
//     }
//   });
//   return result;
// }

// function output(positives, negatives) {
//   console.log(`There are ${positives.length} positive words in the text.`)
//   console.log(`Positive sentiments: ${positives.join(', ')}\n`)

//   console.log(`There are ${negatives.length} negative words in the text.`)
//   console.log(`Negative sentiments: ${negatives.join(', ')}\n`)

//   let sentiment = positives.length > negatives.length ? 'Positive' : 'Negative'
//   console.log(`The sentiment of the text is ${sentiment}.`)
// }

// sentiment(textExcerpt);

// console output

// let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
// let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

// function sentiment(text) {
//   let arr = text.replace(/\s/g,' ').replace(/[^a-z' ]/ig,'').split(' ');
//   let positives = countWords(positiveRegex, arr);
//   let negatives = countWords(negativeRegex, arr);
//   output(positives, negatives);
// }

// function countWords(regex, textArr) {
//   let result = [];
//   textArr.forEach(word => {
//     word = word.toLowerCase();
//     if (!!word.match(regex)) {
//       result.push(word);
//     }
//   });
//   return result;
// }

// function output(positives, negatives) {
//   console.log(`There are ${positives.length} positive words in the text.`)
//   console.log(`Positive sentiments: ${positives.join(', ')}\n`)

//   console.log(`There are ${negatives.length} negative words in the text.`)
//   console.log(`Negative sentiments: ${negatives.join(', ')}\n`)

//   let sentiment = positives.length > negatives.length ? 'Positive' : 'Negative'
//   console.log(`The sentiment of the text is ${sentiment}.`)
// }

// sentiment(textExcerpt);
// let longText = 'Four score and seven years ago our fathers brought forth' +
//   ' on this continent a new nation, conceived in liberty, and' +
//   ' dedicated to the proposition that all men are created' +
//   ' equal.' +
//   ' Now we are engaged in a great civil war, testing whether' +
//   ' that nation, or any nation so conceived and so dedicated,' +
//   ' can long endure. We are met on a great battlefield of that' +
//   ' war. We have come to dedicate a portion of that field, as' +
//   ' a final resting place for those who here gave their lives' +
//   ' that that nation might live. It is altogether fitting and' +
//   ' proper that we should do this.' +
//   ' But, in a larger sense, we can not dedicate, we can not' +
//   ' consecrate, we can not hallow this ground. The brave' +
//   ' men, living and dead, who struggled here, have' +
//   ' consecrated it, far above our poor power to add or' +
//   ' detract. The world will little note, nor long remember' +
//   ' what we say here, but it can never forget what they' +
//   ' did here. It is for us the living, rather, to be dedicated' +
//   ' here to the unfinished work which they who fought' +
//   ' here have thus far so nobly advanced. It is rather for' +
//   ' us to be here dedicated to the great task remaining' +
//   ' before us -- that from these honored dead we take' +
//   ' increased devotion to that cause for which they gave' +
//   ' the last full measure of devotion -- that we here highly' +
//   ' resolve that these dead shall not have died in vain' +
//   ' -- that this nation, under God, shall have a new birth' +
//   ' of freedom -- and that government of the people, by' +
//   ' the people, for the people, shall not perish from the' +
//   ' earth.';

// function longestSentence(text) {
//   let sentences = textToSentences(text);
//   let longestSentence = sentences.reduce((longerSentence, sentence) => {
//     if (wordCount(sentence) > wordCount(longerSentence)) {
//       return sentence;
//     } else {
//       return longerSentence;
//     }
//   });
//   displayResult(longestSentence)
// }

// function wordCount(sentence) {
//   return sentence.split(' ').length;
// }

// function displayResult(longestSentence) {
//   console.log(longestSentence, '\n');
//   console.log(`The longest sentence has ${wordCount(longestSentence)} words.`)
// }

// function textToSentences(text) {
//   let sentences = [];
//   let sentence = '';
//   let letters = text.split('');
//   letters.forEach(letter => {
//     if (letter.match(/[\.\!\?]/)) {
//       sentences.push(sentence + letter);
//       sentence = '';
//     } else {
//       sentence += letter;
//     }
//   });
//   return sentences.map(sentence => sentence.trim());
// }

// // textToSentences(longText)

// longestSentence(longText);

// // console output
// // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// // The longest sentence has 86 words.


// // Assuming the last sentence is removed:

// // longestSentence(longText);

// // console output
// // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// // The longest sentence has 30 words.

// function foo(list) {
//   return list.map(function (word) {
//       return word.match(/[aeiou]/ig) || [];
//     })
//     .reduce(function (acc, letterList) {
//       return acc + letterList.length;
//     }, 0);
// }

// console.log(foo(['apple', 'banana', 'orange']));

let text = 'abc'

console.log(text.split(' '));
console.log(text.split(/\s+/));
console.log(text.match(/\S+/));
console.log(text.match(/\S+/g));

text = 'abc efg'

console.log(text.split(' '));
console.log(text.split(/\s+/));
console.log(text.match(/\S+/));
console.log(text.match(/\S+/g));

text = 'abc__efg'
console.log(text.split(/_+/));