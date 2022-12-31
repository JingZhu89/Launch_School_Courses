// function crunch(str) {
//   result = ''
//   for (let i = 0; i < str.length; i++) {
//     if (result.slice(-1) !== str[i]) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// function logInBox(str) {
//   let size = str.length + 2
//   logLine(size);
//   logSpace(size);
//   console.log(`| ${str} |`)
//   logSpace(size);
//   logLine(size);
// }

// function logLine(length) {
//   let line = '+';
//   for (i = 1; i <= length; i++) {
//     line += '-';
//   }
//   line += '+';
//   console.log(line);
// }

// function logSpace(length) {
//   let line = '|';
//   for (i = 1; i <= length; i++) {
//     line += ' ';
//   }
//   line += '|';
//   console.log(line) ;
// }
// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// function stringy(num) {
//   result = ''
//   for (i = 1; i <= num; i++) {
//     if (i % 2 === 1) {
//       result += '1'
//     } else {
//       result += '0'
//     }
//   }
//   return result
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function findFibonacciIndexByLength(len) {
//   let f1 = 1n;
//   let f2 = 1n;
//   let sum;
//   let counter = 1n;
//   while (true) {
//     if (String(f1).length == len) {
//       return counter;
//     }
//     sum = f1 + f2;
//     f1 = f2;
//     f2 = sum;
//     counter += 1n;
//   }
// }

// console.log(findFibonacciIndexByLength(2n) === 7n); 
// console.log(findFibonacciIndexByLength(3n) === 12n);
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// function triangle(num) {
//   for (let i = 1; i <= num; i++) {
//     line = ''
//     for (let n = 1; n <= num - i; n++) {
//       line += ' '
//     }

//     for (let m = 1; m <= i; m++) {
//       line += '*'
//     }
//     console.log(line);
//   }
// }

// triangle(9)

// function madlibs() {
//   const rlSync = require('readline-sync: ');
//   let noun = rlSync.question('Enter a noun: ');
//   let verb = rlSync.question('Enter a verb: ');
//   let adjective = rlSync.question('Enter an adjective: ');
//   let adverb = rlSync.question('Enter an adverb: ');

//   console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)
// }
// madlibs()

// function twice(num) {
//   if (isDoubleNum(num)) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// function isDoubleNum(num) {
//   numStr = String(num);
//   if (numStr.length % 2 === 1) {
//     return false
//   } else {
//     let half = numStr.length / 2
//     return numStr.slice(0, half) === numStr.slice(half, numStr.length);
//   }
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function cleanUp(str) {
//   let regex = /[a-z]/ig;
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(regex)) {
//       newStr += str[i];
//     } else if (newStr.slice(-1) !== ' ') {
//       newStr += ' ';
//     }
//   }
//   return newStr;
// }

// console.log(cleanUp("---what's my +*& line?")=== " what s my line ")

// function century(year) {
//   let num = Math.ceil(year / 100)
// }

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"