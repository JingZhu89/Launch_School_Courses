// function delay() {
//   for (let i = 1; i <= 10; i += 1)
//     setTimeout(()=> {
//       console.log(i);
//     }, i * 1000)
// }
// delay();

// //15913210614
// function afterNSeconds(func, seconds){
//   setTimeout(func, seconds * 1000)
// }

let logNumber = function(){
  let n = 1;
  return function() {
    console.log(n);
    n += 1
  }
}()

let startCounting = setInterval(logNumber, 1000);