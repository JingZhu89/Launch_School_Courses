"strict mode";
// function myForEach(arr, func) {
//   for (let index = 0; index < arr.length; index += 1) {
//     func(arr[index], index, arr)
//   }
// }

// let getMin = function(value) {
//     min = value <= min ? value : min
// }

// let min = Infinity;
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3

// function myFilter(array, func) {
//   resultArr = [];
//   for (let index = 0; index < array.length; index += 1 ) {
//     if (func(array[index], index, array)) {
//       resultArr.push(array[index]);
//     }
//   }
//   return resultArr;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

//
// function myMap(array, func) {
//   resultArr =[]
//   for (let index = 0; index < array.length; index += 1) {
//     resultArr.push(func(array[index],index, array));
//   }
//   return resultArr
// }

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// function myReduce(array, func, initial) {
//   let startIndex;
//   let accumulator;
//   if (initial === undefined) {
//     accumulator = initial;
//     startIndex = 0;
//   } else {
//     accumulator = array[0];
//     startIndex = 1;
//   }

//   for (let index = startIndex; index < array.length; index += 1) {
//     accumulator = func(accumulator, array[index]);
//   }
//   return accumulator;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

// function myOwnEvery(array, func) {
//   let result = true;
//   array.forEach(element => {
//     if (!func(element)) {
//       result = false;
//     }
//   });
//   return result;
// }

// let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// map to a new object with values doubled from myObject
// function doubleObjectValues(object) {
//   let objEntries = Object.entries(object);
//   let objMapped = objEntries.map(([key, val]) => [key, val * 2]);

//   return Object.fromEntries(objMapped);
// }

// console.log(doubleObjectValues({ a: 1, b: 2, c: 3 })); // { a: 2, b: 4, c: 6 }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(arr) {
//   let areas = arr.map(([w, l]) => w * l ) 
//   return areas.reduce((accumulator, element) => accumulator + element)
// }

// console.log(totalArea(rectangles));    // 141

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(arr) {
//   let squares = arr.filter(rectangle => rectangle[0] === rectangle[1])
//   let areas = squares.map(square => square[0] * square[1] ) 
//   return areas.reduce((accumulator, element) => accumulator + element)
// }

// console.log(totalArea(rectangles));    // 121

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// function processReleaseData(data) {
//   dataArr = Object.entries(data);
//   filteredArr = dataArr.filter(subArr => {
//     obj = subArr[1];
//     return obj.id !== undefined && obj.title !== undefined;
//   });
//   return filteredArr.map(subArr => { 
//     return {'id': subArr[1].id, 'title': subArr[1].title};
//   });
// }

// console.log(processReleaseData(newReleases));

// // should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

// function octalToDecimal(numberString) {
//   digitArr = numberString.split('')
//   return digitArr.reverse().reduce((accumulator, currentVal, currentInd) => {
//     return accumulator + Number(currentVal) * Math.pow(8, currentInd)
//   }, 0);
// }

// console.log(octalToDecimal('1'));           // 1
// console.log(octalToDecimal('10'));          // 8
// console.log(octalToDecimal('130'));         // 88
// console.log(octalToDecimal('17'));          // 15
// console.log(octalToDecimal('2047'));        // 1063
// console.log(octalToDecimal('011'));         // 9

// function anagram(word, list) {
//   return list.filter(wordTwo => {
//     return wordMatch(word, wordTwo);
//   })
// }

// function wordMatch(wordOne, wordTwo) {
//   let lettersOne = wordOne.split('');
//   let lettersTwo = wordTwo.split('');
//   if (lettersOne.length !== lettersTwo.length) return false;

//   for (let i = 0; i < lettersOne.length; i += 1)
//   {
//     let index = lettersTwo.findIndex(element => element === lettersOne[i] )
//     if (index === -1) {
//       return false;
//     } else {
//       lettersTwo.splice(index, 1);
//     }
//   }
//   return true
// }

// console.log(wordMatch('listen','inlets' ))

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// function processBands(data) {
//   data.forEach(obj => {
//     obj.country = 'Canada';
//     obj.name = obj.name.replace(/\./g, '');
//     obj.name = capitalize(obj.name)
//   });
//   return data
// }

// function capitalize(str) {
//   strArr = str.split(' ');
//   return strArr.map(word => {
//     firstLetter = word[0];
//     firstUpper = firstLetter.toUpperCase();
//     word = word.replace(firstLetter, firstUpper);
//     return word
//   }).join(' ');
// }

// console.log(processBands(bands));

// // should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function generateClassRecordSummary(scores) {
  let result = {};
  let students = Object.entries(scores);
  result['studentGrades'] = StudentGrades(students);
  result['exams'] = examSummary(students);
  return result;
}

function sum(arr) {
  return arr.reduce((total, score) => total + score, 0);
}

function studentGrade(student) {
  let avgExam = sum(student.scores.exams) / 4;
  let totalExercise = sum(student.scores.exercises);
  let score = (avgExam * EXAM_WEIGHT) + (totalExercise * EXERCISE_WEIGHT);
  score = Math.round(score);
  let grade = calcGrade(score);
  return String(score) + '(' + grade + ')';
}

function StudentGrades(students) {
  let result = [];
  students.forEach(student => {
    result.push(studentGrade(student[1]));
  });
  return result;
}

function calcGrade(score) {
  if (between(score, 93, 100)) {
    return 'A';
  } else if (between(score, 85, 92)) {
    return 'B';
  } else if (between(score, 77, 84)) {
    return 'C';
  } else if (between(score, 69, 76)) {
    return 'D';
  } else if (between(score, 60, 68)) {
    return 'E';
  } else if (between(score, 0, 59)) {
    return 'F';
  }
}

function between(score, min, max) {
  if (score <= max && score >= min) return true;
  return false;
}

function groupByExam(students) {
  let exams = [];
  students.forEach(student => {
    let studentExams = student[1].scores.exams;
    studentExams.forEach((exam, index) => {
      if (exams[index] === undefined) {
        exams[index] = [exam];
      } else {
        exams[index].push(exam);
      }
    });
  });
  return exams;
}

function examSummary(students) {
  let exams = groupByExam(students);
  return exams.map(exam => {
    let summary = {};
    summary['average'] = (sum(exam) / exam.length).toFixed(1);
    summary['minimum'] = Math.min(...exam);
    summary['maximum'] = Math.max(...exam);
    return summary;
  });
}

console.log(generateClassRecordSummary(studentScores));