// Nested array of nodes
let nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];


function arrayToNodes(nodes, n) {
  // if the first element in the array is a string
  // openingtag
  // newline + two tabs plus the return value of the second element
        // the second element is an array of one or more elements([tag+content] combo)
        //
  // newline + closingtag
  if (n === undefined) {
    n = 0;
  }
  if (nodes[1].length === 0) {
    return `${'\t'.repeat(n)}<${nodes[0].toLowerCase()}></${nodes[0].toLowerCase()}>`
  } else {
    return `${'\t'.repeat(n)}<${nodes[0].toLowerCase()}>\n`+ nodes[1].map(subarr=>{
      return arrayToNodes(subarr, n+1)
    }).join('\n') +`\n${'\t'.repeat(n)}</${nodes[0].toLowerCase()}>`
  }
}

console.log(arrayToNodes(nodes));

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

