for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 99; i += 2) {
  console.log(i);
}

let rlSync = require('readline-sync');
let length = Number(rlSync.question("Enter length in meters\n"));
let width = Number(rlSync.question("Enter width in meters\n"));
console.log(`The area of the room is ${length * width} square meters ${length * width * 10.7639} square feet`)

let rlSync = require('readline-sync');
let bill = parseFloat(rlSync.question("What's the bill\n"));
let tipPercentage = parseInt(rlSync.question("What's the tip\n"));
let tip = bill * tipPercentage / 100
let total = tip + bill

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

let rlSync = require('readline-sync');
let num = Number(rlSync.question("Please enter an integer greater than 0\n"));
let type = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.');

if (type === 's') {
  let sum = 0
  for (let counter = 1; counter <= num; counter += 1) {
    sum += counter;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`) ;
} else if (type === 'p') {
  let product = 1
  for (let counter = 1; counter <= num; counter += 1) {
    product *= counter;
  }
  console.log(`The product of the integers between 1 and ${num} is ${product}`) ;
}

function shortLongShort(str1, str2) {
  result = ''
  if (str1.length > str2.length) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }
  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

function isLeapYear(yr) {
  if (yr < 1975 && yr % 4 === 0) {
    return true
  } else if (yr % 400 === 0) {
    return true;
  } else if (yr % 100 === 0) {
    return false;
  } else if (yr % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

function multisum(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
function utf16Value(str) {
  sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str[i].charCodeAt(0)
  }
  return sum
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811