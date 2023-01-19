// function makeListTransformer(func) {
//   return function(arr) {
//       return arr.map(func);
//   }
// }

// let timesTwo = makeListTransformer(function(number) {
//   return number * 2;
// });

// console.log(timesTwo)
// console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]

// function makeCounterLogger(fromNum) {
//   return function (targetNum) {
//     let i;
//     if (fromNum > targetNum) {
//       i = fromNum;
//       do {
//         console.log(i);
//         i -= 1;
//       } while (i >= targetNum)
//     } else {
//       i = fromNum
//       do {
//         console.log(i);
//         i += 1;
//       } while (i <= targetNum)
//     }
//   }
// }
// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

// function makeList() {
//   let list = [];
//   return function(item) {
//     if (!item) {
//       displayList(list);
//     } else {
//       addOrRemoveItem(list, item);
//     }
//   }
// }

// function displayList(list) {
//   if (list.length === 0) {
//     console.log('The list is empty.')
//   } else {
//     list.forEach(item => {
//       console.log(item);
//     })
//   }
// }

// function addOrRemoveItem(list, item) {
//   let itemIndex = list.indexOf(item)
//   if ( itemIndex === -1) {
//     list.push(item);
//     console.log(`${item} added!`)
//   } else {
//     list.splice(itemIndex, 1);
//     console.log(`${item} removed!`)
//   }
// }

// let list = makeList()
// list();
// list('make breakfast');
// list('read book');
// list();
// list('make breakfast');
// list();

// function makeMultipleLister(num) {
//   return function() {
//     for (let i = 1; i * num < 100; i += 1) {
//       console.log(i * num);
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();

// function makeTotal() {
//   let totalObj = {
//     total: 0,
//     add: function(num) {
//       this.total += num;
//       console.log(this.total);
//     },
//     subtract: function(num) {
//       this.total -= num;
//       console.log(this.total);
//     },
//   }
//   return totalObj
// }

// let total = makeTotal();
// let add = total.add.bind(total)
// let subtract = total.subtract.bind(total)
// add(1);
// add(42);
// subtract(39)


function makeList() {
  let items = []
  let list = {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      let itemIndex = items.indexOf(item);
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      if (items.length === 0) {
        console.log('The list is empty.')
      } else {
        items.forEach(item => {
          console.log(item);
        })
      }
    },
  }
  return list
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();