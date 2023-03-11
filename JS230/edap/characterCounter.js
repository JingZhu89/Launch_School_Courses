
document.addEventListener('DOMContentLoaded', event => {
  let text = document.querySelector('textarea');
  let button = document.querySelector('button')
  text.addEventListener('keydown', event => {
    let textString= event.currentTarget.value;
    let remainingCt = 140 - textString.length;
    let paragraph = document.querySelector('.counter');
    let invalidCt = remainingCt < 0;
    if (invalidCt) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
    text.classList.toggle('invalid', invalidCt)
    paragraph.textContent = remainingCt.toString() + ' characters remaining';
  });
});