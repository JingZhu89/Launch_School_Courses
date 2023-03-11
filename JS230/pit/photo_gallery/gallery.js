document.addEventListener('DOMContentLoaded', () => {
  let imgs = document.querySelectorAll('ul img');
  let ul = document.querySelector('ul');
  ul.addEventListener('click', function(event) {
    event.preventDefault();
    for (let i = 0; i < imgs.length; i+=1) {
      if (event.target === imgs[i]) {
        let newSource = imgs[i].getAttribute('src');
        document.querySelector('.show').classList.replace('show','hide');
        document.querySelector(`figure img[src="${newSource}"]`).classList.replace('hide','show');
      }
    }
  })

})