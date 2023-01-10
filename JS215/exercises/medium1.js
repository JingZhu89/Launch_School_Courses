// function rotateArray(arr) {
//   let newArr
//   if (!Array.isArray(arr)) {
//     return undefined;
//   } else {
//     if (arr.length === 0) return [];
//     newArr = arr.slice();
//     let firstElement = newArr.shift();
//     newArr.push(firstElement)
//   }
//   return newArr;
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// P roatate digits in a number. 
    // input the number to be rotated and the number of digits from the left to be roatetd
    // output is the rotated number
// E: when 1, no need to do anything
     // more than 1. count the nth digit from the left and move it to the end of the number
// D: string => array
// A: 1. number to string. string to array
  //  2. use splice(n, 1) to remove the element from the array and return the element. save that element to a variable
  // 3. concat that element to the end of the original array. and join and convert to number

// function rotateRightmostDigits(num, n) {
//   let arr = num.toString().split('');
//   let temp = arr.splice(-n, 1);
//   return Number(arr.concat(temp).join(''));
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

// P: input is a number Ouput is a rotated number
// E: 105
    // 105 - 051 i = 0
    // 051 - 015 i = 1
// D string
// A: iterate through each position in the string and perform rotation at each iteration
    // take the part of the string from the iteration index position to the end of the string
    // for that substring, move the first element of the string to the last element
    // return the first half plus the mutated substring
    // go to the next iteration
// return the final string and convert to number

// function maxRotation(num) {
//   let numStr = num.toString();
//   for (i = 0; i < numStr.length; i += 1) {
//     let secondHalf = numStr.slice(i);
//     let firstHalf = numStr.slice(0, i);
//     secondHalf = rotate(secondHalf);
//     numStr = firstHalf + secondHalf;
//   }
//   return Number(numStr);
// }

// function rotate(str) {
//   return str.slice(1) + str[0];
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

//P input: a string of numbers and actions
  // ouput: nothing unless print action is called if print is called print the regiter value to the console

//E minilang('3 PUSH PUSH 7 DIV MULT PRINT');
  // 3: place 2 in the register
  // push: [3] in the stack and 3 is still in the register;
  // push: [3, 3] in the stack and 3 is still in the register
  // 7: [3, 3] 7 register
  // DIV: [3] 7 / 3 = 2, 2 is in the register
  // MULT: [] 3 * 2 = 6, 6 is in the register
  // print,print 6 to the register
  // other then numbers and print, every function modify the stack, 
    // push adds to the stack, do not modify the register;
    // math opertions pop from the stack, perform some operation update register with the return value
//array 
//A:
  // start with an empty array as stack
  // and a 0 as register value
  // helper functions for each operation
  // split the program string into array
  // iterate through the array and use switch statement to match the command with the right function and then go to the next iteration;

// function minilang(str) {
//   let stack = [];
//   let register = 0;
//   let programs = str.split(' ');
//   programs.forEach(program => {
//     switch(program) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'ADD':
//         register = stack.pop() + register;
//         break;
//       case 'SUB':
//         register = register - stack.pop() ;
//         break;
//       case 'MULT':
//         register = register * stack.pop();
//         break;
//       case 'DIV':
//         register = Math.floor((register / stack.pop()));
//         break;
//       case 'REMAINDER':
//         register = register % stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       default:
//         register = Number(program);
//         break;
//     }
//   });
// }

// console.log(minilang('PRINT'));
// // 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// P convert every number word in a string to number characters
      // input string
      // output : string
// E: five to 5 three to 3
      // assume that the case of the word doesn't matter, FIVE === 5
// D: array for iteration through each word & for the constant number words
// A: 1. create constant for number words where index correspond to the word
    // iterate through every word in the const
    // replace the word with the index of the word
    // 5. join the returned array from map with ' '
    // 6. return the joined string

// const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// function wordToDigit(str) {
//   NUMBERS.forEach((number, index) => {
//     let pattern = new RegExp(`\\b${number}\\b`, 'gi');
//     str = str.replace(pattern, index);
//   });
//   return str
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks. weight'))

// P: calculate the nth fibonacci number input is n output is the number
// E: 1 1 2(1+1) 3(1+2) 5(2+3) 7(3+4)
// A: f(n) = f(n-1) +  f(n-2) f1 = 1 f2 = 2
let results = {};
function fibonacci(n) {
  let result;
  if (n === 1) {
    result = 1;
  } else if (n === 2) {
    result = 1;
  } else {
    result = (results[n-1] || fibonacci(n - 1)) + (results[n-2] || fibonacci(n - 2)); 
  }
  results[n] = result;
  return result;
}

// function fibonacci(n) {
//   if (n <= 2) {
//     return 1
//   } else {
//     let f1 = 1;
//     let f2 = 1;
//     while (n - 2 > 0) {
//       let f3 = f1 + f2;
//       [f1, f2] = [f2, f3];
//       n -= 1;
//     }
//     return f2
//   }
// }

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765