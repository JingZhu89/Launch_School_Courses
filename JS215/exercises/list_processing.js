// function sum(num) {
//   let digits = String(num).split('');
//   return digits.reduce((total, digit)=>{
//     return total + Number(digit);
//   }, 0);
// }
// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


// const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

// function alphabeticNumberSort(arr) {
//   let newArr = arr.slice();
//   newArr.sort((a, b) => {
//     if (NUMBERS[a] > NUMBERS[b]) {
//       return 1;
//     } else if (NUMBERS[a] < NUMBERS[b]) {
//       return -1;
//     } else {
//       return 0
//     }
//   })
//   return newArr;
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function multiplyAllPairs(arr1, arr2) {
//   let result = [];
//   arr1.forEach(arr1Num => {
//     arr2.forEach(arr2Num => {
//       result.push(arr1Num * arr2Num)
//     });
//   });
//   result.sort((a, b) => a - b);
//   return result
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// function sumOfSums(arr) {
//   arr = subArr(arr);
//   return arr.reduce((accumulator, currenSubArr) => {
//     return accumulator + currenSubArr.reduce((total, currentVal) => total + currentVal , 0)
//   }, 0);
// }

// function subArr(arr) {
//   let result = [];
//   arr.forEach((element, index) => {
//     result.push(arr.slice(0, index + 1));
//   })
//   return result
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// function leadingSubstrings(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i += 1) {
//     result.push(str.slice(0, i + 1));
//   }
//   return result;
// }



// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// function subStrings(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i += 1) {
//     tempStr = str.slice(i);
//     result.push(leadingSubstrings(tempStr));
//   }
//   return result.flat();
// }

// console.log(subStrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]



// function palindrome(str) {
//   let letters = str.split('');
//   if (letters.length === 1) return false;
//   while (letters.length > 1) {
//     if (letters[0] === letters[letters.length - 1]) {
//       letters.pop();
//       letters.shift();
//     } else {
//       return false
//     }
//   }
//   return true
// }



// function palindromes(str) {
//   let candidates = subStrings(str);
//   return candidates.filter(str => {
//     return palindrome(str);
//   })
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

//   console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function buyFruit(arr) {
//   let result = [];
//   arr.forEach(subArr => {
//     for (let i = subArr[1]; i > 0; i -= 1) {
//       result.push(subArr[0]);
//     }
//   });
//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(id, transactions) {
  return transactions.filter(transaction => {
    return transaction['id'] === id;
  })
}
console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function isItemAvailable(id, transactions) {
  trans = transactionsFor(id, transactions);
  quantity = trans.reduce((total, trans) => {
    if (trans.movement === 'in') {
      return total + trans.quantity;
    } else {
      return total - trans.quantity;
    }
  }, 0);
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
