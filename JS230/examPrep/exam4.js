function helloLater(n) {
  let time = n * 1000;
  setTimeout(function () {
    console.log("Hello, world!")
  }, time)
}

helloLater(3);