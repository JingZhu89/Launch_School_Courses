// P: compare two version numbers and 
//  -return 1 if one is greater than the second, 
//  - return -1 if one is less than the seccond
//  - return - if they are the same

// E: 
//  - each version numbner is a combnination of numbers and .
//  - the first number can be 0
//  - there can be more than 1 digits between .
//  - 1 === 1.0
//  - the value is determined by compare the numbers between . one by one starting from the left
//  - if there are non . non digit character return null

// D:
// string to array

// A:
// - use regex to check if there are non digiht non . character and return null if that's the case
// - convert both string to array using split.
// - end with the longer array last index
// - iterate through array using for because can breakout of loop early
// - at each index convert str to number and compare the differentce (when it's undefined, or '' convert to 0)
// - if at any iteration one number is bigger or smaller return 1 or -1 otherwise congtinue
// - return 0 if iterate through the longer array without returning

// function compareVersions(version1, version2) {
//   if (!versionValidation(version1) || !versionValidation(version2)) return null;
//   let v1Arr = version1.split('.');
//   let v2Arr = version2.split('.');
//   let endIndex = v1Arr.length > v2Arr.length ? v1Arr.length : v2Arr.length;
//   for (let index = 0; index < endIndex; index += 1) {
//     if (numberConversion(v1Arr[index]) > numberConversion(v2Arr[index])) {
//       return 1;
//     } else if (numberConversion(v1Arr[index]) < numberConversion(v2Arr[index])) {
//       return -1;
//     }
//   }
//   return 0
// }

// function versionValidation(version) {
//   return !version.match(/([^0-9.]|\.\.|^\.|\.$)/g);
// }

// function numberConversion(number) {
//   if (number === undefined) {
//     return 0;
//   } else {
//     return Number(number);
//   }
// }

// console.log(compareVersions('1', '1'));            // 0
// console.log(compareVersions('1.1', '1.0'));        // 1
// console.log(compareVersions('2.3.4', '2.3.5'));    // -1
// console.log(compareVersions('1.a', '1'));          // null
// console.log(compareVersions('.1', '1'));           // null
// console.log(compareVersions('1.', '2'));           // null
// console.log(compareVersions('1..0', '2.0'));       // null
// console.log(compareVersions('1.0', '1.0.0'));      // 0
// console.log(compareVersions('1.0.0', '1.1'));      // -1
// console.log(compareVersions('1.0', '1.0.5'));      // -1

// Problem:
  // - Input a string of numbers and special characters, special characters should be removed
  // - output
  //    - when valid 10 digits numbers
  //    - when invalid 10 0s

// Example:
  // - if number is less than 10 digits, bad number
  // - if number is 11 digits and first one is 1 than trim the 1 and use the last 10
  // - if number is 11 digits and firs number is not 1 bad number
  // - if number is more than 11 digits then it's a bad number
  // - if number is 10 digits, assume it's good

// Data:
  // - input is string
  // - output is number

// Algorithm
  // replace non number characters in the string with ''
  // check  the length of the resulting string if more than 11 or less than 10 or equal to 11 but first digit is not 1 return 10 0s
  // if the length of th resulting string is 11 and the first digit is 1. trim the first digit
  // return the remaining number


// function cleanNumber(str) {
//   str = str.replace(/[^0-9]/g,'');
//   if (str.length > 11 || str.length < 10 || (str.length === 11 && str[0] !== '1')) {
//     return '0000000000';
//   } else if (str.length === 11) {
//     str = str.slice(1);
//   }
//   return str
// }

// console.log(cleanNumber('1234'))   // return '0000000000'
// console.log(cleanNumber('13144412830'))   // return '3144412830'
// console.log(cleanNumber('73144412830'))   // return '0000000000'
// console.log(cleanNumber('7108708987644412830'))   // return '0000000000'
// console.log(cleanNumber('1(314)4412830'))   // return '3144412830'
// console.log(cleanNumber('1(314)44-12830'))   // return '3144412830'
// console.log(cleanNumber('2(314)44-12830'))   // return '0000000000'
// console.log(cleanNumber('12312314(314)44-12830'))   // return '0000000000'
// console.log(cleanNumber('((44-12830'))   // return '0000000000'

// P
  // input: string that contains both number and non number chars
  // output: boolean true or false
  // Counting from the rightmost digit and moving left, double the value of every second digit subtract 9 from the result
  // take if the sum of each digits from resulting numnber is % 10 === 0 true otherwise false

// E
  // 1111 => 2121 (1*2,1,1*2,1)  2 + 1 + 2 + 1 = 6 false
  // 8763 => 7733 (8 * 2 - 9,7,2*6 - 9,3)  7 + 7 + 3 + 3 = 20 true

// D
  // convert string to array.

// A
  // 1. remove all non number characters
  // 2. split the resulting number string to array
  // 3. reverse the array
  // 4. use map
        // 1. for even index number, return the current Number(number)
        // 2. for odd index number, if NUmber(number) * 2 > 10 return Number(number)* 2 - 9 else  Number(number) * 2
  // 5. use reduce to sum the numbers
  // 6. use % 10 === 0 to determin final true or false

// function luhn(numStr) {
//   if (!numStr) return false;
//   numStr = numStr.replace(/\D/g,'');
//   let numbers = numStr.split('');

//   let luhnNum = numbers.reverse().map((number, index) => {
//     number = Number(number);
//     if (index % 2 === 0) {
//       return number;
//     } else if (index % 2 === 1) {
//       return number * 2 >= 10 ? number * 2 - 9 : number * 2;
//     }
//   });

//   let sum = luhnNum.reduce((total, num) => total + num);
//   return sum % 10 === 0;
// }

// console.log(luhn('2323 2005 7766 3554')) // true
// console.log(luhn('2121')) // true
// console.log(luhn('1111')) // false
// console.log(luhn('8763')) // true
// console.log(luhn('8763abc')) // true
// console.log(luhn('8763-)')) // true
// console.log(luhn('')) // false


// P: 
  // input 
  // - input string
  // - characters that appears in pairs of two
  // - can only use 1 charater from each set. ? use multiplee times?
  // output
  // - whether the input string can be spelled with the given chearacter set boolean true / false 
  // case does not matter
// E:
  // BATCH returns true
  // BUTCH returns false because U and H are from the same block
  // empty string?
  // special characters in string e.g. space?
// D:
  // array of two se
// A:
  // 1. covert string to upperstring
  // 2. convert string to array
  // 3. for each letter in the array, check if the character apears again in the array if so return false
        // else check if the character is in block1 if so return the index and find the corresponding index in block two and check
        // if that letter is in the array if so return false
        // if the character is not in blcok 1 check if it's in block two and repeadt the process
  // 4 return true if every letter doesn't return false
  // use for each since want to breakout of the loop early if possible

// let BLOCKS1 = ['B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z'];
// let BLOCKS2 = ['O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y',  'M'];

// function isBlockWord(str) {
//   str = str.toUpperCase();
//   let letters = str.split('');
//   for (let index = 0; index < letters.length; index += 1) {
//     let letter = letters[index];
//     let remainingLetters = letters.slice(index + 1)
//     if (remainingLetters.includes(letter)) {
//       return false;
//     } else if (otherLetterInArr(letter, remainingLetters)) {
//       return false;
//     }
//   }
//   return true;
// }

// function otherLetterInArr(letter, arr) {
//   let otherLetter;
//   if (BLOCKS1.includes(letter)) {
//     otherLetter = BLOCKS2[BLOCKS1.indexOf(letter)];
//   } else if (BLOCKS2.includes(letter)) {
//     otherLetter = BLOCKS1[BLOCKS2.indexOf(letter)];
//   }
//   return arr.includes(otherLetter);
// }


// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
  
// P: givebn a list of numbers with shorthand range return a complete list
    // input : numbers/ranges(numbers pluse - : ..) seperated by comma
    // output : number string joined by comma

// E:
    // , represent a stopping point for the range or number
    // a number represent the first number that ends with number given from the previous number
    // - or : or .. are interchangable
    // when there is one - or : or .. from th ecurrent number to the next one in line
    // when there are more than one : or - or .. in one section, that each num + : + num is one range, but should not duplicate the middle number

// D:
    // arrays

// A:
    // start with an empty array to record results
    // clean up input string, replace : or .. with -
    // split input string by ,
    // for each element in the array check if it's single number or range
      // if single number use the helper function and push the last number to result arrary
      // if range, split the range by '-'
        // for the first number in the range array, use the helper function to find the number and pust the last number in the result array to the main result array
        // iterate through the array, for each string, run the helper method to find the actual number


  // helper function that translate shorthand number to actual number( argument: number string, main function result array)
    // start with an empty result array []
    // if main function result array is empty, just covert the string to number and push to the result array
    // if main function array is not empty 
      // get the string length n
      // use the last number in the result array as starting number
      // increment the number, convert the resulting number to string, check the last n characters and compare with the argument string. if match, that's
      // the actual number if go to the next iteration
      // push every incrementation to the array

// function shortHand(str) {
//   let result = [];
//   str = str.replace(/(\.\.|\:)/g, '-');
//   sections = str.split(', ');
//   sections.forEach(str => {
//     let numStrs = str.split('-');
//     // if there is only a number and not arange push the only number if there is a range push the first number
//     result.push(lastElement(numberChain(numStrs[0], result)));
//     // iteration start from second numner
//     for (index = 1; index < numStrs.length; index += 1) {
//       result = result.concat(numberChain(numStrs[index], result));
//     }
//   });
//   return result;
// }

// function numberChain(numStr, arr) {
//   let result = [];
//   if (arr.length === 0) {
//     result.push(Number(numStr));
//   } else {
//     let len = numStr.length;
//     let currentNum = lastElement(arr)
//     while (true) {
//       currentNum += 1;
//       result.push(currentNum);
//       if (currentNum.toString().slice(-len) === numStr) break;
//     }
//   }
//   return result
// }

// function lastElement(arr) {
//   return arr[arr.length - 1];
// }

// console.log(shortHand("1, 3, 7, 2, 4, 1")) // --> 1, 3, 7, 12, 14, 21
// console.log(shortHand("1-3, 1-2")) //--> 1, 2, 3, 11, 12
// console.log(shortHand("1:5:2")) // --> 1, 2, 3, 4, 5, 6, ... 12
// console.log(shortHand("104-2")) //--> 104, 105, ... 112
// console.log(shortHand("104-02")) //--> 104, 105, ... 202
// console.log(shortHand("545, 64:11")) // --> 545, 564, 565, .. 611


// P: input a string and a number, output shift each letter in the string by the number of positions to the right, wrap around if go pass
// the last alphabet

// E : number can be 0, and returns the same characyer
// upper case covert to uppercase lower case convert to lower case
// do not convert non alphabets

// D: array

// A:
    //- split the string by ''
    //- iterate through each character using map
    //- if it's an alphabet, get the ASCII numeber, increment the ASCII number by n % 26 remainder
    //- convert that number back to alphabet and return that alphabet
    //- if not an alphabet, return itself
