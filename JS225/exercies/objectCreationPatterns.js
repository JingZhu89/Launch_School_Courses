
// Object.prototype.ancestors = function ancestors() {
//   if (Object.getPrototypeOf(this).name !== undefined) {
//     return [Object.getPrototypeOf(this).name].concat(Object.getPrototypeOf(this).ancestors())
//   }
//   return ['Object.prototype'];
// }

// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// function delegate(obj, methodName, ...args) {
//   return function() {return obj[methodName].call(obj,...args)}
  
// }

// baz.qux();   // logs 'hello test';

// foo.bar = () => { console.log('changed'); };

// baz.qux();          // logs 'changed'

// function Person(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return this.firstName + ' ' + this.lastName;
// };

// Person.prototype.communicate = function() {
//   console.log('communicate')
// };

// Person.prototype.eat = function() {
//   console.log('eat')
// };

// Person.prototype.sleep = function() {
//   console.log('sleep')
// };

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function() {
//   console.log('study')
// }

// function GraduateStudent(firstName, lastName, age, gender,degree, graduateDegree) {
//   Student.call(this, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);

// GraduateStudent.prototype.research = function() {
//   console.log('research')
// }

// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'
// console.log(person.constructor)
// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent.constructor)
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// class Person {
//   constructor (firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
// fullName() {
//   return this.firstName + ' ' + this.lastName;
// };

// communicate() {
//   console.log('communicate')
// };

// eat() {
//   console.log('eat')
// };

// sleep() {
//   console.log('sleep')
// };
// }

// class Student extends Person {
//   constructor (firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree
//   }

//   study() {
//   console.log('study')
//   }
// }

// class GraduateStudent extends Student {
//   constructor (firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree
//   }

//   research() {
//   console.log('research')
//   }
// }

// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// let Account = (function() {
//   let userEmail;
//   let userPassword;
//   let userFirstName;
//   let userlLastName;

//   function validPassword(password) {
//     return userPassword === password;
//   }
  
//   function anonymize() {
//     str = '';
//     for (let index = 0; index < 16; index += 1) {
//       randIndex = Math.floor(Math.random() * 62)
//       str += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randIndex]
//     }
//     return str;
//   }

//   return {
//     init(email, password, firstName, lastName, displayName){
//       userEmail = email;
//       userPassword= password;
//       userFirstName = firstName;
//       userlLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },
//     reanonymize(password) {
//       if (validPassword(password)) {
//         this.displayName = anonymize();
//       } else {
//         return 'Invalid password'
//       }
//     },
//     resetPassword(password, newPassword) {
//       if (validPassword(password)) {
//         userPassword = newPassword;
//         return true
//       } else {
//         return 'Invalid password'
//       }
//     },
//     firstName(password) {
//       if (validPassword(password)) {
//         return userFirstName;
//       } else {
//         return 'Invalid password'
//       }
//     },
//     lastName(password) {
//       if (validPassword(password)) {
//         return userlLastName;
//       } else {
//         return 'Invalid password'
//       }
//     },
//     email(password) {
//       if (validPassword(password)) {
//         return userEmail;
//       } else {
//         return 'Invalid password'
//       }
//     },
//   }
// })();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false


let ItemManager = (function(){
  function generateSKUcode(name, category) {
    return (name.replace(/\s/g,'').slice(0,3) + category.slice(0, 2)).toUpperCase();
  }

  function validName(name) {
    return name.replace(/\s/g,'').length >= 5
  }

  function validQuantity(quanity) {
    return quanity !== undefined
  }

  function validCategory(category) {
    return !category.match(/\s/g) && category.length >=5
  }

  function findSKU(sku) {
    return this.items.filter(item => item.sku === sku)[0];
  }

  return {
    items: [],
    create(itemName, category, quantity) {
      if (validName(itemName) && validCategory(category) && validQuantity(quantity)) {
        let sku = generateSKUcode(itemName, category) 
        this.items.push({sku, itemName, category, quantity})
      }
    },
    update(sku, updateProperties) {
      let item = findSKU.call(this, sku);
      for (prop in updateProperties) {
        item[prop] = updateProperties[prop];
      }
    },
    inStock() {
      this.items.forEach(item => {
        if (item.quantity !== 0) {
          console.log(item);
        }
      });
    },
    itemsInCategory(category) {
      let itemsInCategory = this.items.filter(item => item.category === category);
      itemsInCategory.forEach(item => console.log(item));
    },
    delete(sku) {
      let item = findSKU.call(this, sku);
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }

  }
})();

let ReportManager = (function(){
  return {
    init(itemManager) {
      this.items = itemManager;
    },
    createReporter(sku) {
      let items = this.items.items;
      let item = items.filter(item => item.sku === sku)[0];
      return {
        itemInfo() {
          for (prop in item) {
            console.log(`${prop}:${item[prop]}`);
          }
        }
      }
    },
    reportInStock(){
      let instock = [];
      this.items.items.forEach(item => {
        if (item.quantity !== 0) {
          instock.push(item.itemName);
        }
      })
      console.log(instock.join(', '));
    }
  }
})()

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items);
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10