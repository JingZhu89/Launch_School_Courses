// P 
  // input a number
  // output an array of numbers

// E
  // n = 5, lights 1 - 5
  // initial state all off
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on // toggled 2 & 4// iteration number is 2
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on // toggled 3 //iteration number is 3
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on // toggled 4 // iteration 4
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on // toggled 5// iteration is 5

// at each iteration, the light toggled are multiples of the iteratiion number that are smaller than n;
// toggle if on turns off if off turns on

// D
  //array

// A:
  // represnt on with 1 and off with 0
  // start with an array of n 0s;
  // use a for loop to to iterate n times, starting from index 1 end at n
    // each iteration, use for each to go through the array
    // for each index in the array, if (index + 1) % iteration number === 0 reassigned the array element using the helper method
  // after both inner and outer iteration is done, return filtered array by value of 1
  

  // helper method togger
  // if value is 0 change to 1 if value is 1 change to zero
 

  // function lightsOn(n) {
  //   let arr = new Array(n);
  //   arr.fill(0);
  //   for (iteration = 1; iteration <= n; iteration += 1) {
  //     arr.forEach((element, index) => {
  //       if ((index + 1) % iteration === 0) {
  //         arr[index] = toggle(arr[index]);
  //       }
  //     });
  //   }
  //   onLights = arr.map((element, index) => {
  //     if (element === 1) {
  //       return index + 1
  //     } else {
  //       return element;
  //     }
  //   });
  //   return onLights.filter(element => element !== 0);
  // }

  // function toggle(val) {
  //   return val === 1 ? 0 : 1; 
  // }

  // console.log(lightsOn(5));        // [1, 4]

  // console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// P 
  // input an odd integer n
  // out put printed diamond that's n lines and the longes line is n * shortest line is 1 * and increment by two at first
  // after reaching the longes decrement by 2
// E
  // 1 is just *
  // 3 
    // 1 space 1* 1 space
    // 3*

  //9
    // 4 space, 1 *, 4 space 
    // 3 space, 3 *, 3 space
    // 2 space, 5 *, 2 spaces
    //...
    // 9 stars
    // reverse
// number of stars starts from 1 and increment by 2, untill n
// number of spaces = (n - star) /2  on both sides
// after reaching n stars
// reverse

// D
  // each line is repesented by string
  // array for the 1 to n - 2 lines
  // add the n * line
  // reverse the order of the array for the other half

// A
  // start with an empty array
  // iterate from 1 to n - 2 (number of stars)
  // incremet index by 2 in every iteration
  // during each iteration, push a string to the array
  // start with empty string
  // add index number stars and (n - index) /2 spaces on both sides
  // create a copy of the resulting array and reverse
  // first array + * * n + reverse array
  // print to console

// function diamond(n) {
//   let upperDiamond = [];
//   for (let index = 1; index <= n - 2; index += 2) {
//     upperDiamond.push(line(index, n));
//   }
//   let lowerDiamond = upperDiamond.slice().reverse();
//   upperDiamond.push('*'.repeat(n));
//   let diamond = upperDiamond.concat(lowerDiamond);
//   printDiamond(diamond);
// }

// function line(numOfStars, n) {
//   let str = '';
//   let numberOfSpaces = (n - numOfStars) / 2;
//   return str + ' '.repeat(numberOfSpaces) + '*'.repeat(numOfStars) + ' '.repeat(numberOfSpaces);
// }

// function printDiamond(arr) {
//   arr.forEach(element => console.log(element))
// }
// diamond(1)

// let LOWERZ = 'z'.charCodeAt(0)
// let UPPERZ = 'Z'.charCodeAt(0)


// function caesarEncrypt(str, n) {
//   let letters = str.split('');
//   return letters.map(letter => {
//     if (isAlphabet(letter)) {
//       return shift(letter, n);
//     } else {
//       return letter;
//     }
//   }).join('');
// }

// function shift(char, n) {
//   n = n % 26;
//   let asciiNum = char.charCodeAt(0);
//   let newAsciiNum;
//   if (asciiNum <= UPPERZ && asciiNum + n <= UPPERZ) {
//     newAsciiNum = asciiNum + n;
//   } else if ((asciiNum <= UPPERZ && asciiNum + n > UPPERZ)) {
//     newAsciiNum = asciiNum + n - 26;
//   } else if ((asciiNum > UPPERZ && asciiNum + n <= LOWERZ)) {
//     newAsciiNum = asciiNum + n;
//   } else if ((asciiNum > UPPERZ && asciiNum + n > LOWERZ)) {
//     newAsciiNum = asciiNum + n - 26;
//   }


//   return String.fromCharCode(newAsciiNum);
// }

// function isAlphabet(char) {
//   return !!char.match(/[a-z]/i);
// }

// console.log(caesarEncrypt('A', 0));       // "A"
// console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
// console.log(caesarEncrypt('y', 5));       // "d"
// console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
// console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// E:
  // when mathching the plain text with keyword, non alphabet characters doesn't count
// A:
  // get the length of the key word
  // iterate through each character in the string one by one, keep an index number that correspond to the index in the key word
  //   at each iteration, check if the character is alphabet if so increment index by 1
  //   if the index is already key word length - 1 then start from 0 at the next iteration
  //    use map to create a new array of characters

// function vigenereCipher(plaintext, keyword) {
//   let chars = plaintext.split('');
//   let len = keyword.length;
//   let i = 0;
//   return chars.map(char => {
//     let newChar;
//     if (char.match(/[a-z]/i)) {
//       newChar = shift(char, findshift(keyword[i]));
//       if (i === len - 1) {
//         i = 0
//       } else {
//         i += 1;
//       }
//     } else {
//       newChar = char;
//     } 
//     return newChar
//   }).join('')
// }

// function findshift(letter) {
//   if (letter <= 'z' & letter >= 'a') {
//     return letter.charCodeAt(0) - 'a'.charCodeAt(0);
//   } else if (letter <= 'Z' & letter >= 'A') {
//     return letter.charCodeAt(0) - 'A'.charCodeAt(0);
//   }
// }


// let plaintext = 'Pineapples don\'t go on pizzas!';
// let key = 'meat';
// console.log(vigenereCipher(plaintext, key));

  // plaintext: Pineapples don't go on pizzas!
  // keyword: meat
  
  // Applying the Vigenere Cipher for each alphabetic character:
  // plaintext : Pine appl esdo ntgo onpi zzas
  // shift     : meat meat meat meat meat meat
  // ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
  
  // result: Bmnxmtpeqw dhz'x gh ar pbldal!

// P: input a number >= 7 output a printed star, middle line equals to the number
// E: n = 7
    // line 1: 1 star 2 spaces 1 star 2 spaces 1 star; total 3 stars, 4 spaces
    // line 2: 1 space 1 star 1 space 1 star 1 space 1 star 1 space: total 4 spaces 3 stars
    // line 3: 2 spaces 3 stars 2 spaces: total 4 spaces 3 stars.
    // line 4 7 stars
    //... reverse the first three lines
    // space before and after stars stars from [0, 1 ... number -1 / 2]
    // space between stars = (number - 2 * spaces before stars - 3) /2
// string for each line and array for collection of lines
// A:
    // firstHalf = []
    // midline = n *
    // i = 0 to i < (n - 1) / 2
      // starBfore = i
      // starBetween = (n - i * 2  - 3) / 2
      // str = ' ' * starBfore + star + ' ' * starBetween + star + ' ' * starBetween + ' ' * starBfore
      // push str to array
    // reverse the array to get the second half
    // first half + midline + second half
    // iterater through the full collection and print each line

function line(spaceBeforeStars, n) {
  spaceBetweenStars = (n - spaceBeforeStars * 2 - 3) / 2
  return str = ' '.repeat(spaceBeforeStars) + '*' + ' '.repeat(spaceBetweenStars) + '*' 
        + ' '.repeat(spaceBetweenStars) + '*' + ' '.repeat(spaceBeforeStars)
}

function star(n) {
  let firstHalf = [];
  let half = (n - 1) / 2;
  let midline = '*'.repeat(n)
  for (let index = 0; index < half; index += 1) {
    firstHalf.push(line(index, n));
  }
  let secondHalf = firstHalf.slice().reverse();
  firstHalf.push(midline);
  arr = firstHalf.concat(secondHalf);
  printStar(arr);
}

function printStar(arr) {
  arr.forEach(element => console.log(element));
}
console.log(star(9));