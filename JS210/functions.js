let a = 'outer';

console.log(a);
console.log(setScope);
console.log(a);

var setScope = function () {
  a = 'inner';
};