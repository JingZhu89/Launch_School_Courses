let me = {
  firstName: 'Jing',
  lastName: 'Zhu',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let hubby = {
  firstName: 'Adam',
  lastName: 'Harrell',
};

let mom = {
  firstName: 'Shirley',
  lastName: 'Du',
};

let dad = {
  firstName: 'David',
  lastName: 'Zhu',
};

let people = {
  collection: [me, hubby, mom, dad],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach((element, i) => {
      if (person.firstName === element.firstName &&
          person.lastName === element.lastName) {
            index = i
          }
    });
    return index;
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let index = this.getIndex(person);
    if (index === -1) return;
    this.collection.splice(index, 1)
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
  
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.remove({firstName: 'Adam', lastName: 'Harrell'});
console.log(people.collection)
