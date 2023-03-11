document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      id = event.target.href.match('#article-[0-9]+')[0];
      clearHighlight()
      document.querySelector(id).classList.add('highlight')
    } else {
      clearHighlight()
      highlightParentElement(event.target) 
    }

  })
});

function clearHighlight() {
  let highlighted = Array.from(document.querySelectorAll('.highlight'));
  highlighted.forEach(element => {
    element.classList.remove('highlight')
  })
}

function highlightParentElement(element) {
  let parent 
  
  while (true){
    parent = element.parentNode;
    if (parent.tagName === 'ARTICLE') {
      parent.classList.add('highlight');
      return;
    } else if (parent.tagName === 'HTML') {
      document.querySelector('main').classList.add('highlight')
      return;
    } else {
      element = parent;
      console.log(element)
    }
  }
}