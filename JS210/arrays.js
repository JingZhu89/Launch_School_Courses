// lastInArray = arr => arr[arr.length - 1];

// array = ['Aiden', 'Joe']
// rollCall = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// rollCall(array);

// const NUMBERS = [1, 2, 3, 4, 5];
// reverseArray = function(arr) {
//   let newArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr
// }
// console.log(reverseArray(NUMBERS))

// function arrayToString(arr) {
//   let resultStr = '';
//   for (let i = 0; i < arr.length; i++) {
//     resultStr += String(arr[i]);
//   }
//   return resultStr
// }

// console.log(arrayToString([1, 2, 3]));

// let count = [0, 1, 2];
// function push(arr, val) {
//   arr[arr.length] = val;
//   return arr.length
// }
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// let count = [1, 2, 3];
// function pop(arr) {
//   popped = arr[arr.length - 1]
//   arr.length = arr.length - 1
//   return popped
// }
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// let count = [1, 2, 3];
// function unshift(arr, val) {
//   for (let i = arr.length; i > 0; i -= 1) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = val
//   return arr.length
// }
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// let count = [1, 2, 3];
// function shift(arr) {
//   let shifted = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1
//   return shifted
// }
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

// function indexOf(arr,val) {
//   for (index = 0; index < arr.length; index += 1) {
//     if (arr[index] === val) {
//       return index
//     }
//   }

//   return -1
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// function lastIndexOf(arr,val) {
//   for (index = arr.length - 1; index >= 0; index -= 1) {
//     if (arr[index] === val) {
//       return index
//     }
//   }

//   return -1
// }

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// function slice(arr, start, end) {
//   let newArr = [];
//   for (let i = start; i < end; i+=1) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// function splice(arr, start, num) {
//   let removed = [];
//   for (i = start; i < start + num; i += 1) {
//     if (i < start + num) {
//       removed.push(arr[i])
//     }
//   }
//   for (i = start; i < arr.length - num; i += 1) {
//     arr[i] = arr[i + num];
//   }
//   arr.length = arr.length - num
//   return removed
// }
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// function concat(arr1, arr2) {
//   let arr = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     arr.push(arr1[i])
//   }
//   for (let i = 0; i < arr2.length; i += 1) {
//     arr.push(arr2[i])
//   }
//   return arr
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// function join(arr, str) {
//   let result = ''
//   for (let i = 0; i < arr.length; i++) {
//     result += String(arr[i]);
//     if (i < arr.length - 1) {
//       result += str;
//     }

//   }
//   return result
// }


// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   } else {
//     for (index = 0; index < arr1.length; index++) {
//       if (arr1[index] !== arr2[index]) {
//         return false
//       }
//     }

//     return true
//   }

// }

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

// function firstElementOf(arr) {
//   return arr[0]
// }

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

function nthElementOf(arr, index) {
  return arr[index]
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return?
console.log(nthElementOf(digits, -1));  // what does this return?

digits[-1] = -42;
console.log(nthElementOf(digits, -1));
console.log(digits[-1]);
console.log(digits['-1']);    // Note that we are using a string here
console.log(digits.length)