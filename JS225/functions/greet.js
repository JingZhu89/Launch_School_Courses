function greet(arg1, arg2) {
  let capitalized = arg1[0].toUpperCase() + arg1.slice(1);
  console.log(`${capitalized}, ${arg2}!`)
}

function sayWhat(arg1) {
  return function(arg2) {
    return greet(arg1, arg2);
  };
}

let sayHello = sayWhat('Hello');
sayHello('Brandon');

let sayHi = sayWhat('Hi');
sayHi('Sarah');

function partial(func, arg1) {
  return function(arg2) {
    return func(arg2, arg1);
  };
}

function subtract(a, b) {
  return a - b;
}

sub5 = partial(subtract, 5)
console.log(sub5(10));
console.log(sub5(20));

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  let subject = 'Math'
  return function(value) {
    rollCall(subject, value)
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
