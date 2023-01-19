// function makeObj() {
//   return {
//     propA: 20,
//     probB: 20,
//   };
// }

// function createInvoice(services) {
//   let obj =  {
//     phone: 3000,
//     internet: 5500,
//     payments: [],
//     total() {
//       return this.phone + this.internet
//     },
//     addPayment(payment) {
//       this.payments.push(payment);
//     },
//     addPayments(newpayments) {
//       this.payments = this.payments.concat(newpayments);
//     },
//     amountDue() {
//       return this.total() - paymentTotal(this.payments);
//     }
//   };
//   if (!!services && services['internet']) {
//     obj.internet = services['internet'];
//   }
//   if (!!services && services['phone']) {
//     obj.phone = services['phone'];
//   }
//   return obj
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));             // => 31000

// function createPayment(services = {}) {
//   return {
//     internet: services.internet || 0,
//     phone: services.phone || 0,
//     amount: services.amount || 0,
//     total() {
//       return this.amount || (this.internet + this.phone);
//     }
//   }
// }

// function paymentTotal(payments) {
//   let total = 0;
//   let i;

//   for (i = 0; i < payments.length; i += 1) {
//     total += payments[i].total();
//   }

//   return total;
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({
//   amount: 2000,
// });

// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200,
// });

// let payment3 = createPayment({
//   phone: 1000,
// });

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue());       // this should return 0

// let prot = {};

// let foo = Object.create(prot);

// console.log(prot.isPrototypeOf(foo))

// function getDefiningObject(object, propKey) {
//   if (!object) return null;
//   if (object.hasOwnProperty(propKey)) {
//     return object;
//   } else {
//     object = Object.getPrototypeOf(object);
//     // console.log(object);
//     return getDefiningObject(object, propKey);
//   }
// }


// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// function shallowCopy(object) {
//   let parent = Object.getPrototypeOf(object);
//   let kv = Object.entries(object)
//   let newObj = Object.create(parent);
//   kv.forEach(subarr=> {
//     newObj[subarr[0]] = subarr[1];
//   })
//   return newObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// console.log(baz.say());                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

// function extend(...destination) {
//   let obj = {}
//   destination.forEach(protObj => {
//     for (prot in protObj) {
//       if (!obj.hasOwnProperty(prot)) {
//         obj[prot] = protObj[prot];
//       }
//     }
//   });
//   return obj

// }

// let foo = {
//   a: 0,
//   b: {
//     x: 1,
//     y: 2,
//   },
// };

// let joe = {
//   name: 'Joe'
// };

// let funcs = {
//   sayHello() {
//     console.log('Hello, ' + this.name);
//   },

//   sayGoodBye() {
//     console.log('Goodbye, ' + this.name);
//   },
// };

// let object = extend({}, foo, joe, funcs);

// console.log(object.b.x);          // => 1
// object.sayHello();                // => Hello, Joe

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);
// console.log(a);

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// function Circle(num) {
//   this.area = function() {
//     return Math.PI * num ** 2;
//   }
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// let ninja;
// function Ninja() {
//   Object.setPrototypeOf(this, Ninja.prototype);
//   this.swung = true;
// }

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// ninja = new Ninja();
// console.log(ninja.swingSword());

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this
// }
// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// let ninjaB = new ninjaA.constructor
// // create a ninjaB object

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// let shape =  {
//   getType() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c){
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// };
// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c
// }

// Triangle.prototype.constructor = Triangle;
// let t = new Triangle(3, 4, 5);

// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

// function User(first, last) {
//   if(!(this instanceof User)) {
//     return new User(first, last)
//   }
//   this.name = first + ' ' + last;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');
// console.log(user2);

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function createObject(obj) {
//   function Bar() {
//   }
//   Bar.prototype = obj;
//   return new Bar();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// let foo = {
//   a: 1,
// };

// Object.prototype.begetObject = function() {
//   function Newobj() {};
//   Newobj.prototype = this;
//   return new Newobj();
// }

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// function neww(constructor, args) {
//   let obj = Object.create(constructor.prototype);
//   let result = constructor.apply(obj,args);
//   return typeof result === 'object' ? result : obj
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// console.log(john.greeting());          // => Hello, John Doe
// console.log(john.constructor);         // Person(firstName, lastName) {...}

// function newPerson(name) {
//   let obj = {name};
//   Object.defineProperties(obj, {log:{
//     value: function() {console.log(obj.name)},
//     writable: false}
//   })
//   return obj
// }

// let me = newPerson('Shane Riley');
// me.log();     // => Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // => Shane Riley

// function Dog(){}
// Dog.prototype.bark = function() {
//   console.log('wang');
// }

// let dog = new Dog();
// dog.bark();   //wang
// Dog.prototype.poop = function() {
//   console.log('poop');
// }
// dog.poop();   //poop
// console.log(Dog.prototype.constructor)  //[Function: Dog]
// console.log(dog.constructor)  //[Function: Dog]
// Dog.prototype = {
//   eat() {
//     console.log('yumyum');
//   }
// }
// let dog2 = new Dog();
// dog2.eat();  //yum yum
// dog.eat();   // dog.eat is not a function
// console.log(Dog.prototype.constructor)  //[Function: Oject]
// console.log(dog.constructor)  //[Function: Dog]
// console.log(dog2.constructor) //[Function: Oject]

// obj1 = {bark() {
//   console.log('wangwang')
// }}
// let obj2 = Object.create(obj1);
// let obj3 = Object.create(obj2);
// console.log(Object.getOwnPropertyNames(obj1));
// console.log(Object.getOwnPropertyNames(obj2));
// console.log(Object.getOwnPropertyNames(obj3));
// obj3.bark();

// function Dog() {
//   this.bark = function(){
//     console.log('woof')
//   }
//   return 1;
// }
// Dog.prototype.barkTwice = function(){
//   console.log('woofwoof')
// }

// // let dog1 = new Dog();
// let dog2 = new Dog();
// // console.log(dog1.bark === dog2.bark);
// // console.log(dog1.barkTwice === dog2.barkTwice);
// // console.log(Object.getPrototypeOf(Dog) === Function.prototype);
// // console.log(dog1 === 1);
// console.log(dog2 === 1);

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let bar = () => console.log(this.a + ' ' + this.b);
//     return bar
//   }
// };

// let obj2 = {
//   a: 1,
//   b: 2
// }
// console.log(this.a)
// let baz = obj.foo.call(obj2);
// baz()

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }.bind(this));
//   },
// };

// obj.foo();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };

// obj.foo();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     [1, 2, 3].forEach((number) => {
//       console.log(this);
//     });
//   },
// };
// obj.foo();

// let obj2 = {
//   a: 'hello',
//   b: 'world',
//   foo: () => {
//     console.log(this)
//     },
// };
// obj2.foo()

// function init() {
//   var name = 'Mozilla'; 
//   function displayName() {
//     console.log(name); 
//   }
//   return displayName;
// }
// let func = init();
// func()

function primaryFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(arg1) {
  return function(arg2) { // applicator
    return primaryFunction(arg1, arg2);
  }
}

// let applicatorFunction = generatorFunction('Hello');
let applicatorFunction = primaryFunction.bind(null, 'Hello')
applicatorFunction(37.2);