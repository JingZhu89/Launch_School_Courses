// function objectHasProperty(object, property) {
//   keys = Object.keys(object);
//   return keys.indexOf(property) !== -1;
// }

// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// function incrementProperty(arr, property) {
//   let current = arr[property] === undefined ? 0 : arr[property];
//   arr[property] = current + 1;
// }

// incrementProperty(wins, 'susie');   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// incrementProperty(wins, 'lucy');    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};

// function copyProperties(obj1, obj2) {
//   let count = 0;
//   for (let property in obj1) {
//     obj2[property] = obj1[property];
//     count += 1;
//   }
//   return count
// }

// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }

// function wordCount(str) {
//   let words = str.split(' ');
//   let result = {};
//   words.forEach(element => {
//     if (result[element]) {
//       result[element] += 1;
//     } else {
//       result[element] = 1;
//     }
//   })
//   return result;
// }

// console.log(wordCount('box car cat bag box'))

// function greetings(arr,obj) {
//   let name = arr.join(' ');
//   let job = obj.title + obj.occupation;
//   console.log(`Hello, ${name}! Nice to have a ${job} around.`)
// }

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

function repeatedCharacters(str) {
  let arr = charCount(str);
  for (key in arr) {
    if (arr[key] === 1) {
      delete arr[key];
    }
  }
  return arr
}

function charCount(str) {
  let strLength = str.length;
  let result = {};
  for (let index = 0; index < strLength; index++) {
    let letter = str[index].toLowerCase()
    if (result[letter] !== undefined) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
