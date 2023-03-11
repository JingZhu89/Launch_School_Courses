function color(generation) {
  let result = [document.querySelector('BODY')];
  let currentGen = 0;
  while (currentGen !== generation) {
    currentGen += 1;
    result = result.map(node => Array.from(node.children)).flat()
    console.log(result)
  }
  result.forEach(node => node.classList.add('generation-color'))
}


color(2);