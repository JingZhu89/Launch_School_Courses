function countdown(count) {
  (function recursion(n) {
    console.log(n);

    if (n===0) {
      console.log('Done!');
    } else {
      recursion(n - 1);
    }
  })(count);
}