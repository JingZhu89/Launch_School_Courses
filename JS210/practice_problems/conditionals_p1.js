// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';

// if (myBoolean) {
//   console.log('Hello');
// }

// if (!myString) {
//   console.log('World');
// }

// if (!!myArray) {
//   console.log('World');
// }

// if (myOtherString || myArray) {
//   console.log('!');
// }

// let rlSync = require('readline-sync');
// let number1 = Number(rlSync.question('Enter the first number:'));
// let number2 = Number(rlSync.question('Enter the first number:'));
// console.log(`${number1} + ${number2} = ${number1 + number2}`);
// console.log(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);

// let rlSync = require('readline-sync');
// let phrase = rlSync.question('please enter a phrase\n')
// let size = phrase.replace(/[^a-zA-Z]/g,'').length
// console.log(`There are ${size} characters in "${phrase}"`)

// const DIGITS = {
//   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//   '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// };

// function stringToSignedInteger(str) {
//   let digits = str.replace(/[\+-]/, '')
//   let size = digits.length
//   let multiplier = 1
//   let num = 0
//   while (size > 0) {
//     num = num + DIGITS[digits[size - 1]] * multiplier
//     multiplier = multiplier * 10
//     size -= 1
//   }
//   if (str[0] === '-') {
//     return num * -1
//   } else {
//     return num
//   }
// }

// console.log(stringToSignedInteger('4321'));      // 4321
// console.log(stringToSignedInteger('-570'));  // -570
// console.log(stringToSignedInteger('100'));   // 100

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let digits = []
  let remainingNumber = integer
  do {
    let digit = remainingNumber % 10
    digits.push(DIGITS[digit])
    remainingNumber = Math.floor(remainingNumber/10)
  } while (remainingNumber > 0)
  return digits.reverse().join("")
}

function signedIntegerToString(integer) {
  if (integer > 0) {
    return '+' + integerToString(integer)
  } else if (integer < 0) {
    return '-' + integerToString(integer * -1)
  } else {
    return '0'
  }
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(signedIntegerToString(-4321));      // "-4321"
console.log(signedIntegerToString(5000));      // "+5000"
console.log(signedIntegerToString(0));      // "0"