function nodesToArray(currentNode) {
  if (!currentNode) {
    currentNode = document.querySelector('body');
  }
  if (currentNode.children.length === 0) {
    return ([currentNode.nodeName, []])
  } else {
    return ([currentNode.nodeName, Array.from(currentNode.children).map(node=> nodesToArray(node))]);
  }
}
console.log(JSON.stringify(nodesToArray()));
//["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]