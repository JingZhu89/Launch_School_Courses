function domTreeTracer(node) {
  if (typeof node === 'number') {
    node = document.getElementById(node);
  }
  let parent = node.parentNode;
  let children = Array.from(parent.children);
  if (parent.nodeName === 'BODY') {
    return [children.map(node => node.nodeName)];
  } else {
    console.log(children);
    return [children.map(node => node.nodeName)].concat(domTreeTracer(parent));
  }
}

console.log(JSON.stringify(domTreeTracer(22)))