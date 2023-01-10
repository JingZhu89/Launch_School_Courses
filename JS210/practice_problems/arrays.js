// let myArray = [1, 2, 3, 4];
// let serializedArr = JSON.stringify(myArray);
// const myOtherArray = JSON.parse(serializedArr)

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// function concat(array1, secondArgument) {
//   let result = [];
//   array1.forEach(element => result.push(element));
//   if (Array.isArray(secondArgument)) {
//     secondArgument.forEach(element => result.push(element));
//   } else {
//     result.push(secondArgument);
//   }
//   return result;
// }

// concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
// concat([1, 2], 3);                     // [1, 2, 3]
// concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
// concat([2, 3], 'four');                // [2, 3, "four"]


// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// console.log(arr3[5].b = 3);                         // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }

// function concat(array1, ...args) {
//   let result = [];
//   array1.forEach(element => result.push(element));
//   args.forEach(arg => {
//     if (Array.isArray(arg)) {
//       arg.forEach(element => result.push(element));
//     } else {
//       result.push(arg);
//     }
//   })

//   return result;
// }

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// pop
// const array1 = [1, 2, 3];
// function pop(arr) {
//   let popped = arr[arr.length - 1];
//   arr.length = arr.length - 1 >= 0 ? arr.length - 1 : 0;
//   return popped
// }
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// // push
// const array2 = [1, 2, 3];
// function push(arr, ...args) {
//   args.forEach(arg => {
//     newIndex = arr.length;
//     arr[newIndex] = arg;
//   })

//   return arr.length;
// }
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0

// function reverse(inputForReversal) {
//   let result = [];
//   for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
//     result.push(inputForReversal[index]);
//   }
//   if (Array.isArray(inputForReversal)) {
//     return result;
//   } else {
//     return result.join('')
//   }
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// function shift(arr) {
//   return arr.splice(0, 1)[0];
// }

// function unshift(arr, ...args) {
//   let numOfArgs = args.length;
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i + numOfArgs] = arr[i];
//   }
//   for (let i = 0; i < args.length; i++) {
//     arr[i] = args[i];
//   }
//   return arr.length
// }

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// const testArray = [1, 2, 3];
// shift(testArray);                // 1
// console.log(testArray);                       // [2, 3]
// unshift(testArray, 5);           // 3
// console.log(testArray);                       // [5, 2, 3]

// function slice(arr, begin, end) {
//   let len = arr.length;
//   begin = begin > len ? len : begin;
//   end = end > len ? len : end;
//   let result = [];
  
//   for (let i = begin; i < end; i++) {
//     result.push (arr[i]);
//   }

//   return result
// }
// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

// function splice(array, start, deleteCount, ...args) {
//   start = start > array.length ? array.length : start;
//   deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

//   const arrayCopy = slice(array, 0, array.length);
//   const elementCount = args.length;
//   const newLength = array.length + elementCount - deleteCount;
//   array.length = newLength;

//   for (let i = 0; i < elementCount; i += 1) {
//     array[start + i] = args[i];
//   }

//   let copyBackCount = arrayCopy.length - (start + deleteCount);
//   for (let i = 0; i < copyBackCount; i += 1) {
//     array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
//   }

//   return slice(arrayCopy, start, start + deleteCount);
// }
// splice([1, 2, 3], 1, 2);              // [2, 3]
// splice([1, 2, 3], 1, 3);              // [2, 3]
// splice([1, 2, 3], 1, 0);              // []
// splice([1, 2, 3], 0, 1);              // [1]
// splice([1, 2, 3], 1, 0, 'a');         // []

// const arr2 = [1, 2, 3];
// splice(arr2, 1, 1, 'two');             // [2]
// arr2;                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// arr3;                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]

function areArraysEqual(array1, array2) {
  let array2Copy = array2.slice()
  let array1Copy = array1.slice()

  array2Copy.sort((a, b) => {
    if ((typeof a) === 'string' && (typeof b) !== 'string') {
      1;
    } else if ((typeof a) !== 'string' && (typeof b) === 'string') {
      -1;
    } else if ((typeof a) === 'string' && (typeof b) === 'string') {
      a.charCodeAt(0) - b.charCodeAt(0);
    } else {
      a - b;
    }
  });

  array1Copy.sort((a, b) => {
    if ((typeof a) === 'string' && (typeof b) !== 'string') {
      1;
    } else if ((typeof a) !== 'string' && (typeof b) === 'string') {
      -1;
    } else if ((typeof a) === 'string' && (typeof b) === 'string') {
      a.charCodeAt(0) - b.charCodeAt(0);
    } else {
      a - b;
    }
  });

  if (array1Copy.length !== array2Copy.length) {
    return false
  }

  for (let index = 0; index < array1Copy.length; index++) {
    if (array1Copy[index] !== array2Copy[index])
    return false;
  }
  return true
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
