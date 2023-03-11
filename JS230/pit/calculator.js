document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('FORM');
  let p = document.querySelector('P');
  form.addEventListener('submit', event => {
    event.preventDefault();
    let left = Number(form.left.value);
    let right = Number(form.right.value);
    let operator = form.operator.value;
    p.textContent = calculate(left, right, operator);
  })
})

function calculate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '-':
      return num1 - num2;
      break
    case '/':
      return num1 / num2;
      break
    default:
      break
  }
}