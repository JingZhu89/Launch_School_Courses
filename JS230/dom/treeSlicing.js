function sliceTree(pid, cid) {
  let child = document.getElementById(cid);
  let parent = document.getElementById(pid);
  if (!child || !parent) return undefined;
  let result = [child.nodeName];
  let immediateParent = child.parentNode;
  while (child !== parent && immediateParent.nodeName !== 'BODY') {
    result.unshift(immediateParent.nodeName);
    child = immediateParent;
    immediateParent = child.parentNode;
  }
if (!result.includes(parent.nodeName)) return undefined;
return result;
}

console.log(JSON.stringify(sliceTree(1, 4)));
console.log(JSON.stringify(sliceTree(1, 76)));
console.log(JSON.stringify(sliceTree(2, 5)));
console.log(JSON.stringify(sliceTree(5, 4)));
console.log(JSON.stringify(sliceTree(1, 23)));
console.log(JSON.stringify(sliceTree(1, 22)));
console.log(JSON.stringify(sliceTree(11, 19)));