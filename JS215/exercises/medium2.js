// p: 
  // input: a string
  // output: object with 3 keys lowercase, uppercase and neither. values are percentages of each type "50.00" string & two decimals
// E: 'abCdef 123' 6 lower case 1 uppercase 3 digits and 1 space => space and digits are neither
    //'AbCd +Ef' 3 upper 3 lower and 2 neither
    //'123' 0 upper 0 lower and 3 neither
    //''
//D: object to store initial values
    //string
//A: 
  // 0. if empty string return object with "0.00"s
  // 1. create 3 variables lowercase uppercase and neither and all initialize to 0
  // 2. iterate through each character in the string
        // if between 'A' and 'Z' then uppercase += 1
        // if between 'a' and 'z' then lowercase += 1
        // else neither +=1
   //3. calculate the percentage value of each of the 3 variables then * 100 then toFix(2) convert to string
   //4. return the object with thr proper values;

// function letterPercentages(str) {
//   let result = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };
//   if (str === '') return result;
//   let lowercase = 0;
//   let uppercase = 0;
//   let neither = 0;
//   for (let index = 0; index < str.length; index += 1) {
//     if (str[index] >= 'a' && str[index] <= 'z') {
//       lowercase += 1;
//     } else if (str[index] >= 'A' && str[index] <= 'Z')  {
//       uppercase += 1;
//     }
//   }
//   neither = str.length - lowercase - uppercase;
//   result.lowercase = percentageValue(lowercase, str);
//   result.uppercase = percentageValue(uppercase, str);
//   result.neither = percentageValue(neither, str);
//   return result
// }

// function percentageValue(type, str) {
//   let percentage = type / str.length;
//   return (percentage * 100).toFixed(2).toString()
// }


// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('ade'));
// // { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

// console.log(letterPercentages('ADE'));
// // { lowercase: "0.00", uppercase: "100", neither: "0.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// console.log(letterPercentages('')); 
// // { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }


// P input: three numbers ouput: the type of triangle the form or invalid. number can be 0 integer or decimal
// E :
    // if any number is 0 invalid
    // if any number is negative invalid
    // if any two numbers's sum is <= the third number, invalid
    // if the triagle is valid
      // if there are two sides of equal length, Isosceles
      // if tehre are three sides of equal length, equilateral
// D array
// A:
    // run helper function that check if the triangle is valid or not valid
      // 1. calculate the min value of the array if it's <= 0 then invalid false
      // 2. calculate the sum
      // 3. iterate through each element of of the array, check if sum - current element <= current element, if so invalid false
      // 4. otherwise valid true
    // run helper function to determin the type of the triangle
      // 1. start with and sides={}
      // 2. iterate through each side if !sides[side] sides[side] = 1; otherwise sides[side] += 1;
      // 3. get the value of sides
      // 4. get the max of those values and if it's 3 then equilateral, 2 isosceles 1 scalene

// function triangle(num1, num2, num3){
//   let sides = [num1, num2, num3];
//   if (!validTriangle(sides)) {
//     return 'Invalid'
//   } else {
//     return triangleType(sides);
//   }
// }

// function validTriangle(arr) {
//   if (Math.min(...arr) <= 0) return false;
//   let total = arr[0] + arr[1] + arr[2];
//   for (let index = 0; index < 3; index += 1){
//     if (arr[index] >= total - arr[index] ) return false;
//   }
//   return true
// }

// function triangleType(arr) {
//   let sidesCount = {};
//   arr.forEach(side => {
//     if (!sidesCount[side]) {
//       sidesCount[side] = 1;
//     } else {
//       sidesCount[side] += 1;    
//     }
//   });
//   let counts = Object.values(sidesCount);
//   maxCounts = Math.max(...counts);
//   if (maxCounts === 3) {
//     return 'equilateral';
//   } else if (maxCounts === 2) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"
// console.log(triangle(3, 4, 1));        // "invalid"
// console.log(triangle(-3, 4, 5));        // "invalide"

// function triangle(num1, num2, num3) {
//   let degrees = [num1, num2, num3];
//   if (!validTriangle(degrees)) {
//     return 'invalid';
//   } else {
//     return triangleType(degrees);
//   }
// }


// function triangleType(arr) {
//   let maxDegree = Math.max(...arr);
//   if (maxDegree === 90) {
//     return 'right';
//   } else if (maxDegree > 90) {
//     return 'obtuse';
//   } else {
//     return 'acute';
//   }
// }

// function validTriangle(arr) {
//   if (Math.min(...arr) <= 0) return false;
//   let total = arr[0] + arr[1] + arr[2];
//   if (total !== 180) return false;
//   return true
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

// P given a year as integer, return integer that equals to number of friday the 13th in that year
// E
// A: 
  // initiate a count to 0
  //from 0 to 11 months, 
  //create a new date object that takes the string (year => argument, month_index, day=> 13)
  // getDay of the date object
  //check the day of each 13th day fo the month and if that's a 5 increment the count of friday by one


// function fridayThe13ths(yr) {
//   let blackFriday = 0
//   for (monthIndex = 0; monthIndex < 12; monthIndex += 1) {
//     let thirteenth = new Date(yr, monthIndex, 13)
//     if (thirteenth.getDay() === 5) {
//       blackFriday += 1;
//     }
//   }
//   return blackFriday;
// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// P: given a integer, return the next integer that's and odd number and multiples of 7
// E: max featured number is 9876543201, any number higher than that returns a string instead
  // 0? negative?
// A: increment the given number by 1 at a time
      // check if the number is a valid featured number
      // iif so return that number if not increment by one
      // if the number gets bigger than 9876543201 return the string;
// valid featured number (input num) output (boolean true/false)
      // check if the number % 7 === 0 && num % 2 === 1
      // check if the digits are all different
      // check all digits helper (input number) return (t/f)
        // convert the number to digits array toString split('')
        // iterate through each index of the array check if the last index of that element equals to the current index, if not return false
        // return true after the iteration

// function featured(num) {
//   do {
//     num += 1;
//     if (validNum(num)) return num;
//   } while (num <= 9876543201);
//   return "There is no possible number that fulfills those requirements."
// }

// function validNum(num) {
//   return num % 7 === 0 && num % 2 === 1 && uniqDigits(num);
// }

// function uniqDigits(num) {
//   let digits = num.toString().split('');
//   for (let index = 0; index < digits.length; index += 1) {
//     if (digits.lastIndexOf(digits[index]) !== index) {
//       return false
//     }
//   }
//   return true;
// }

// console.log(featured(0));            // 7 
// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// P given a integer, output is also an iteger
// E : for all numbers from 1 to that ingeter, (n) (1+2.... n)^2 - (1^2 + 2^2....n+2)
// A: initiate two totals, one is plain total one is totalOfSquares both to 0
    // starting index is 1 and ending index is the numebr
    // plain total += index
    // totalOfSquaires += index ** 2
    // after iteration completes return plaintotal **2 - total of squares
// function sumSquareDifference(num) {
//   let total = 0;
//   let totalOfSqares = 0;
//   for (index = 1; index <= num; index +=1) {
//     total += index;
//     totalOfSqares += index ** 2;
//   }
//   return total**2 - totalOfSqares
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0 -- (1)**2 - (1**2) 
// console.log(sumSquareDifference(100));    // 25164150

// function bubbleSort(arr) {
//   let swap
//   do {
//     swap = false
//     for (let index = 0; index < arr.length - 1; index += 1) {
//       if (arr[index] > arr[index + 1]){
//         arr.splice(index + 2, 0, arr[index]);
//         arr.splice(index, 1);
//         swap = true;
//       }
//     } 
//   } while(swap === true);
//   return arr
// }


// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// const array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
