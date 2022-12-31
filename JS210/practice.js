function logOddNumbers(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (currentNum % 2 === 0) continue;
    console.log(`${currentNum}`);
  }
}

const { questionNewPassword } = require('readline-sync');

logOddNumbers(3)

function multiplesOfThree(num) {
  if (num % 3 === 0) return true
}

function multiplesOfFive(num) {
  if (num % 5 === 0) return true
}

function multiplesOfThreeAndFive() {
  for (let index = 1; index <= 100; index ++) {
    if (multiplesOfFive(index) && multiplesOfThree(index)) {
      console.log(index + '!');
    } else if (multiplesOfFive(index) || multiplesOfThree(index)) {
      console.log(String(index));
    }
  }
}

multiplesOfThreeAndFive()

function logMultiples(num) {
  for (let index = 100; index > 0; index--) {
    if (index % num === 0 && index % 2 === 1) {
      console.log(index);
    }
  }
}

logMultiples(21);

function multiplesOfThree(num) {
  if (num % 3 === 0) {
    return 'Fizz'
  } else {
    return ''
  }
}

function multiplesOfFive(num) {
  if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return ''
  }
}

function fizzbuzz() {
  for (let index = 1; index <= 100; index ++) {
    if (multiplesOfFive(index) && multiplesOfThree(index)) {
      console.log(multiplesOfThree(index) + multiplesOfFive(index));
    } else if (multiplesOfFive(index) || multiplesOfThree(index)) {
      console.log(multiplesOfThree(index) + multiplesOfFive(index));
    } else {
      console.log(index);
    }
  }
}
fizzbuzz() 

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(43))
console.log(isPrime(55))

function isXor(arg1, arg2) {
  return !!((arg1 || arg2) && !(arg1 && arg2))
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false

const Password = 'password';
const rlSync = require('readline-sync');
let maxAttemps = 3;

while(maxAttemps > 0) {
  passwordGuess = rlSync.question('What is the password:');
  if (passwordGuess === Password) {
    console.log('You have successfully logged in.');
    break
  } else {
    console.log('You have been denied access.');
  }
  maxAttemps -= 1;
}

const rlSync = require('readline-sync');
let counter = 1;
let sum = 0
let totalNum = Number(rlSync.question(`How many scores do you want to enter`));
while(counter <= totalNum) {
  let score = Number(rlSync.question(`Enter Score ${counter}:`));
  sum += score;
  counter += 1;
}
let average = sum / totalNum
let grade = 'F'
if(average >= 90) {
  grade = 'A';
} else if (average >= 70 && average < 90) {
  grade = 'B';
} else if (average >= 50 && average < 70) {
  grade = 'C';
}

console.log(`Based on the average of your 3 scores your letter grade is ${grade}`)

function gcd(num1, num2) {
  let smaller = Math.min(num1, num2);
  for (let counter = smaller; counter > 0; counter--) {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function checkGoldbach(num) {
  let halfPoint = Math.ceil(num / 2);
  for (let counter = 0; counter <= halfPoint; counter += 1) {
    if (isPrime(counter) && isPrime(num - counter)) {
      console.log(counter, num - counter);
    }
  }
}

checkGoldbach(100) 

function generatePattern(num) {
  for (let row = 1; row <= num; row += 1) {
    columns = Array(num).fill('*')
    console.log(columns.map((element, index) => {
      if (index < row) {
        return index + 1
      } else {
        return element
      }
    }).join(''))
  }
}

generatePattern(20);

function indexOf(firstString, secondString) {
  let endingIndex = firstString.length - secondString.length
  for (let index = 0; index <= endingIndex; index++) {
    if (firstString.slice(index, index + secondString.length) === secondString) return index;
  }
  return -1
}

function lastIndexOf(firstString, secondString) {
  let startingIndex = firstString.length - secondString.length
  for (let index = startingIndex; index >=0; index--) {
    if (firstString.slice(index, index + secondString.length) === secondString) return index;
  }
  return -1
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

function lefttrim(str) {
  let characters = [];
  let copyMode = false;
  for (let index = 0; index < str.length; index ++) {
    if (str[index] !== ' ') {
      copyMode = true;
    }
    if (copyMode === true) {
      characters.push(str[index]);
    }
  }
  return characters.join('')
}

function righttrim(str) {
  let characters = [];
  let copyMode = false;
  for (let index = str.length - 1; index >= 0; index --) {
    if (str[index] !== ' ') {
      copyMode = true;
    }
    if (copyMode === true) {
      characters.push(str[index]);
    }
  }
  return characters.reverse().join('')
}

function trim(str) {
  return righttrim(lefttrim(str));
}

console.log(trim(' a b  c ')==='a b  c');

function splitString(str, deliminater) {
  if (deliminater === undefined) {
    console.log("Error no deliminator");
    return
  }
  let subStr = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] === deliminater) {
      console.log(subStr);
      subStr = '';
      continue;
    }
    if (deliminater === '') {
      console.log(str[index])
      continue
    }
    subStr += str[index];
  }
  if (subStr) {
    console.log(subStr);
  }
}

splitString(';hello;', ';')
splitString('abc,123,hello world', ',')
splitString('hello', '')
splitString('hello');

function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) {
    return undefined;
  } else if (times === 0) {
    return '';
  } else {
    for (let index = 1; index < times; index++) {
      string += string
    }
    return string;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

function startsWith(string, searchString) {
  let searchLength = searchString.length;
  for (index = 0; index < searchLength; index++) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }
  return true
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false

function toLowerCase(str) {
  newStr = ''
  for (let index = 0; index < str.length; index++) {
    let asciiNumeric = str[index].charCodeAt(0); 
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      newStr += String.fromCharCode(asciiNumeric);
    } else {
      newStr += str[index]
    }
  }
  return newStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));  // "abcdef"

function substr(string, start, length) {
  let startingIndex
  if (start >= 0) {
    startingIndex = start;
  } else {
    startingIndex = string.length + start;
  }

  if (length <= 0) {
    return ''
  }

  result = ''
  for (let index = startingIndex; index < startingIndex + length; index++) {
    if (index === string.length) break
    result += string[index]
  }
  return result
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

const UPPER_A_ASCII = 'A'.charCodeAt(0)
const UPPER_Z_ASCII = 'Z'.charCodeAt(0)
const LOWER_A_ASCII = 'a'.charCodeAt(0)
const LOWER_Z_ASCII = 'z'.charCodeAt(0)
const ROT = 13

function newAsciiKey(min, max, letter) {
  let letterAscii = letter.charCodeAt(0);
  if (letterAscii + ROT > max) {
    return String.fromCharCode((min + (letterAscii + ROT - max) - 1));
  } else {
    return String.fromCharCode(letterAscii + ROT);
  }
}

function rot13(string) {
  let result = ''
  for (let index = 0; index < string.length; index++) {
    let letter = string[index];
    if (letter >= 'A' && letter <= 'Z') {
      result += newAsciiKey(UPPER_A_ASCII, UPPER_Z_ASCII, letter);
    } else if (letter >= 'a' && letter <= 'z') {
      result += newAsciiKey(LOWER_A_ASCII, LOWER_Z_ASCII, letter);
    } else {
      result += letter;
    }
  }
  return result;
}