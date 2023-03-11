document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursorControl;
  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    if (cursorControl === undefined) {
      cursorControl = setInterval(() => textField.classList.toggle('cursor'), 500);
    }

  });
  document.addEventListener('click', event => {
    textField.classList.remove('focused');
    clearInterval(cursorControl);
    textField.classList.remove('cursor')
  });
  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1)
      } else if (event.key.length === 1) {
        content.textContent += event.key;
      }

    }
  });
});


