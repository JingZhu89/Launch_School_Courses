// (false && undefined); //false
// (false || undefined);  //undefined
// ((false && undefined) || (false || undefined));  //undefined
// ((false || undefined) || (false && undefined));  //false
// ((false && undefined) && (false || undefined));  //false
// ((false || undefined) && (false && undefined));  //undefined
// ('a' || (false && undefined) || '');  //'a'
// ((false && undefined) || 'a' || '');  //'a'
// ('a' && (false || undefined) && '');  //undefined
// ((false || undefined) && 'a' && '');  //undefined


// let i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// function padLeft(number) {
//   const stringNumber = String(number);
//   switch (stringNumber.length) {
//     case 1:
//       return `  ${stringNumber}`;
//       break
//     case 2:  
//       return ` ${stringNumber}`;
//       break
//     default: 
//       return stringNumber;
//       break
//   }
// }

// for (let i = 1; i <= 10; i += 1) {
//   let row = '';
//   for (let j = 1; j <= 10; j += 1) {
//     row += `${padLeft(i * j)} `;
//   }

//   console.log(row);
// }

// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0, length = numbers.length; i < length; i += 1) {
//     for (var j = 0, lengthCol = cols.length; j < lengthCol; j += 1) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }
// // given the following arrays of number arrays
// const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// function debugIt() {
//   const status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

// function invoiceTotal(...amounts) {
//   return amounts.reduce((acc, element) => acc + element);
// }

// console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?

// function productOfSums(array1, array2) {
//   let result = total(array1) * total(array2);
//   return result;
// }

// function total(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// console.log(productOfSums([1,2],[2,3]))
// console.log(total([1,2]))

function makeDoubler(name) {
  return function double(number) {
      console.log(`This function was called by ${name}.`)
      return number + number
  }
}


const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.