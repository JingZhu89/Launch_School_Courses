function findItems() {
  let result = [[],[]];
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i += 1 ) {
      if (inputs[i].hasAttribute('checked')) {
        result[0].push(inputs[i].nextElementSibling.textContent);
      } else {
        result[1].push(inputs[i].nextElementSibling.textContent);
      }
    }
      return(result)
}
findItems();