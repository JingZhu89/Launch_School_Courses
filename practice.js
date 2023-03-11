function Dog(name) {
  this.name = name;
  return this;
}

Dog.prototype = {
  speak: function() {
    console.log('Bark!');
  },
};

var fido = new Dog('fido');
fido.name;     // returns 'fido'
fido.speak();  // results in an error