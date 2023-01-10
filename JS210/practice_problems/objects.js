// const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// let array2 = [];

// array2 = array1
// for (let i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);
// console.log(array1);

// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;
// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / Object.keys(array).length;
// }

// console.log(average(myArray));

// function calculateBonus(salary, bonus) {
//   return bonus ? salary / 2 : 0;
// }

// console.log(calculateBonus(2800, true));               // 1400
// console.log(calculateBonus(1000, false));              // 0
// console.log(calculateBonus(50000, true));              // 25000

// function penultimate(string) {
//   let words = string.split(' ');
//   return words[words.length - 2];
// }

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// let defaultDate = new Date('1/1/2000 00:00');
// function timeOfDay(deltaMinutes) {
//   let deltaMiliSecond = deltaMinutes * 60 * 1000;
//   let newDate = new Date(defaultDate.getTime() + deltaMiliSecond);
//   let hour = newDate.getHours();
//   let minute = newDate.getMinutes();
//   console.log(hour);
//   console.log(minute);
// }

// console.log(timeOfDay(-5))

function afterMidnight(time) {
  let midnight = new Date('1/1/2000 00:00');
  let newtime = new Date('1/1/2000 ' + time);
  let diff = (newtime.getTime() - midnight.getTime()) / 1000 / 60
  return diff
}

console.log(afterMidnight('00:00'))
console.log(afterMidnight('12:34'))

function beforeMidnight(time) {
  let midnight = new Date('1/2/2000 00:00');
  let newtime = new Date('1/1/2000 ' + time);
  let diff = (midnight.getTime()-newtime.getTime()) / 1000 / 60
  return diff
}

console.log(beforeMidnight('24:00'))
console.log(beforeMidnight('12:34'))