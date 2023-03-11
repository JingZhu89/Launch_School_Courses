// function walkList() {
//   document.addEventListener('DOMContentLoaded', () => {
//     let body = document.querySelector('body');
//     walk(body);
//   })
// }

// function walk(node) {
//   let firstChild = node.firstChild;
//   if (firstChild && firstChild.nodeType === 3 && firstChild.textContent.trim() !== "") {
//     console.log(firstChild.textContent.trim());
//   }
//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index]);                         
//   }
// }

// walkList();