function makeBold(element, func) {
  element.style.fontWeight = 'bold';
  if (func !== undefined && typeof func === 'function') {
    func(element);
  }
}
let sectionElement = document.querySelector('section');

makeBold(sectionElement, function(elem) {
  elem.classList.add('highlight');
});

console.log(sectionElement.classList.contains('highlight'))
console.log(sectionElement.style.fontWeight)
