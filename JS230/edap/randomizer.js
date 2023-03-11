function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let n = 1;
  let timeLog = setInterval(() => {
    console.log(n);
    n += 1;
    if (n > callbacks.length * 2) {
      clearInterval(timeLog);
    }
  }, 1000);

  for (let i = 0; i < callbacks.length; i += 1 ) {
    setTimeout(
      callbacks[i], randTime(callbacks.length));
  }

}

randomizer(callback1, callback2, callback3);


function randTime(len) {
  return  Math.floor(Math.random() * 1000 * 2 * len)
}
// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6