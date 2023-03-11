p = new Promise((_, reject)  => {
  setTimeout(()=>reject('Error: Not Launch School'), 2000)
});

p.catch((message) => {
  console.log(message);
})