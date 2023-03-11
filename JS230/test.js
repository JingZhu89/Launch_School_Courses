let p = new Promise((resolve, reject) => {
  let value = Math.random();
  if (value < 0.75) {
    resolve(value);
  } else {
    reject(value);
  }
});
async function showResult(p) {
  try {
    console.log(`In range: ${p}`)
  } catch (error) {
    console.log(`Out of range: ${error}`);
  }
}

showResult(p);