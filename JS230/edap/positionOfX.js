
document.addEventListener('DOMContentLoaded', event => {
  document.addEventListener('mousemove', event => {
    let x = event.clientX;
    let y = event.clientY;
    let obj = document.querySelector('.x');
    obj.style.left = x + 'px'; 
    obj.style.top = y + 'px';
  });  

  document.addEventListener('keydown', event=> {
    let objx = document.querySelector('.horizontal');
    let objy = document.querySelector('.vertical');
    let letter = event.key;
    switch (letter) {
      case 'r':
        objx.style.background = 'red';
        objy.style.background = 'red';
        break;
      case 'b':
        objx.style.background = 'blue';
        objy.style.background = 'blue';
        break;
      case 'g':
        objx.style.background = 'green';
        objy.style.background = 'green';
        break;
      default :
        break;
    }

  })
});
