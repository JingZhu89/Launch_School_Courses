'use strict';

const validation = {
  dataValidation(todoData) {
    this.titleValidation(todoData);
    this.descriptionValidation(todoData);
    this.monthValidation(todoData);
    this.yearValidation(todoData);
  },
  titleValidation(todoData) {
    if (todoData.title.match(/^\s*$/g)) {
      throw new Error('Title can not be empty');
    }
  },
  descriptionValidation(todoData) {
    if (todoData.description.match(/^\s*$/g)) {
      throw new Error('Description can not be empty');
    }
  },
  monthValidation(todoData) {
    if (!todoData.month.match(/(^1[0-2]$)|(^[1-9]$)|(^$)/)) {
      throw new Error('Not a valid month');
    }
  },
  yearValidation(todoData) {
    if (!todoData.year.match(/(^[0-9]{4}$)|(^$)/)) {
      throw new Error('Not a valid year');
    }
  },
  statusValidation(todoData) {
    if (todoData.completed !== 'true' && todoData.completed !== 'false') {
      throw new Error('Not a valid status');
    }
  },
  yrConversion(year) {
    const today = new Date();
    return year ? Number(year) : today.getFullYear();
  },
  statusConversion(status) {
    if (status === 'true') {
      return true;
    } else {
      return false;
    }
  },
  mthConversion(month) {
    const today = new Date();
    return month ? Number(month) : today.getMonth() + 1;
  }
};

function Todo(todoData, id) {
  validation.dataValidation(todoData);
  this.id = id;
  this.title = todoData.title;
  this.completed = false;
  this.month = validation.mthConversion(todoData.month);
  this.year = validation.yrConversion(todoData.year);
  this.description = todoData.description;
}

Todo.prototype.isWithinMonthYear = function(month, year) {
  const targetDate = new Date(year, month - 1);
  const todoDate = new Date(this.year, this.month - 1);
  return todoDate.getTime() <= targetDate.getTime();
};

let todoList = (function() {
  let list = [];
  let id = 0;

  function generateID() {
    id += 1;
    return id;
  }

  function createCopy(obj) {
    let copy = {};
    let prop;
    for (prop in obj) {
      copy[prop] = obj[prop];
    }
    return copy;
  }

  function getOriginalObject(id) {
    for (let listIndex = 0; listIndex < list.length; listIndex += 1) {
      if (list[listIndex].id === id) {
        return list[listIndex];
      }
    }
    throw new Error('This id does not exist');
  }

  let validateUpdateData = function(newProp) {
    let prop;
    for (prop in newProp) {
      switch (prop) {
        case 'title':
          validation.titleValidation(newProp);
          break;
        case 'description':
          validation.descriptionValidation(newProp);
          break;
        case 'month':
          validation.monthValidation(newProp);
          break;
        case 'year':
          validation.yearValidation(newProp);
          break;
        case 'completed':
          validation.statusValidation(newProp);
          break;
        default:
          throw new Error('contains invalid todo properties');
      }
    }
  };

  return {
    add(todoData) {
      const newTodo = new Todo(todoData, generateID());
      list.push(newTodo);
    },
    delete(id) {
      const todo = getOriginalObject(id);
      const listIndex = list.indexOf(todo);
      list.splice(listIndex, 1);
    },
    initialize(todoSet) {
      if (list.length !== 0) {
        throw new Error('List already exist, use add instead');
      } else {
        let todoObjs = todoSet.map(todoData => new Todo(todoData, generateID()));
        list = list.concat(todoObjs);
      }
    },
    getTodo(id) {
      let todo = getOriginalObject(id);
      return createCopy(todo);
    },
    update(id, newProp) {
      let todo = getOriginalObject(id);
      validateUpdateData(newProp);
      let prop;
      for (prop in newProp) {
        if (prop === `month`) {
          todo[prop] = validation.mthConversion(newProp[prop]);
        } else if (prop === 'year') {
          todo[prop] = validation.yrConversion(newProp[prop]);
        } else if (prop === 'completed') {
          todo[prop] = validation.statusConversion(newProp[prop]);
        } else {
          todo[prop] = newProp[prop];
        }
      }
    },
    todos() {
      let listCopy = list.map(obj => {
        return createCopy(obj);
      });
      return listCopy;
    },
    resetList() {
      list = [];
      id = 0;
    },
  };
})();

let todoManager = {
  all: todoList.todos,
  completed: function() {
    return todoList.todos().filter(todo => todo.completed === true);
  },
  todoBy(month, year) {
    return todoList.todos().filter(todo => todo.isWithinMonthYear(month, year));
  },
  completedBy(month, year) {
    return todoList.todos().filter(todo => {
      return todo.isWithinMonthYear(month, year) && todo.completed === true;
    });
  }
};

//--------data--------------

let todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

let todoData5 = {
  title: '',
  month: '2017',
  year: '1',
  description: 'test invalid title',
};

let todoData6 = {
  title: 'test invalid month',
  month: '13',
  year: '',
  description: 'test invalid month',
};

let todoData7 = {
  title: 'test invalid year',
  month: '12',
  year: '19999',
  description: 'test invalid year',
};

let todoData8 = {
  title: 'invalid description',
  month: '',
  year: '',
  description: '',
};

let todoSet = [todoData1, todoData2, todoData3, todoData4];

//------------------tests--------------------
function test(message, assertion) {
  let passed = false;
  let error;
  try {
    passed = assertion();
  } catch (errorCaught) {
    passed = false;
    error = errorCaught.message;
  }
  console.log(message, passed ? "|| PASS" : "|| FAIL, error: " + error);
}

function testError(message, func, expectedError) {
  let error;
  let passed = false;
  try {
    func();
  } catch (errorCaught) {
    error = errorCaught.message;
    passed = (error === expectedError);
  }
  console.log(message, passed ? "|| PASS, error: " + error : "|| FAIL, error: " + error);
}

test('add todoData1', function() {
  todoList.resetList();
  todoList.add(todoData1);
  let todo1 = todoList.getTodo(1);
  return (
    todo1.title === 'Buy Milk' &&
    todo1.month === 1 &&
    todo1.year === 2017 &&
    todo1.completed === false &&
    todo1.description === 'Milk for baby' &&
    todo1.id === 1
  );
});

test('initialize with todo set', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  let todo1 = todoList.getTodo(1);
  let todo2 = todoList.getTodo(2);
  let todo3 = todoList.getTodo(3);
  let todo4 = todoList.getTodo(4);
  const today = new Date();
  return (
    todo1.title === 'Buy Milk' &&
    todo1.month === 1 &&
    todo1.year === 2017 &&
    todo1.completed === false &&
    todo1.description === 'Milk for baby' &&
    todo1.id === 1  &&
    todo2.title === 'Buy Apples' &&
    todo2.month === today.getMonth() + 1 &&
    todo2.year === 2017 &&
    todo2.completed === false &&
    todo2.description === 'An apple a day keeps the doctor away' &&
    todo2.id === 2 &&
    todo3.title === 'Buy chocolate' &&
    todo3.month === 1 &&
    todo3.year === today.getFullYear() &&
    todo3.completed === false &&
    todo3.description === 'For the cheat day' &&
    todo3.id === 3 &&
    todo4.title === 'Buy Veggies' &&
    todo4.month === today.getMonth() + 1 &&
    todo4.year === today.getFullYear() &&
    todo4.completed === false &&
    todo4.description === 'For the daily fiber needs' &&
    todo4.id === 4
  );
});

testError('add todoData5, invalid title raise error', function() {
  todoList.resetList();
  todoList.add(todoData5);
}, 'Title can not be empty');

testError('add todoData6, invalid month raise error', function() {
  todoList.resetList();
  todoList.add(todoData6);
}, 'Not a valid month');

testError('add todoData7, invalid year raise error', function() {
  todoList.resetList();
  todoList.add(todoData7);
}, 'Not a valid year');

testError('add todoData8, invalid description raise error', function() {
  todoList.resetList();
  todoList.add(todoData8);
}, 'Description can not be empty');

test('rejected data not entered into list', function() {
  todoList.resetList();
  try {
    todoList.add(todoData5);
  } catch (error) {
    return todoList.todos().length === 0;
  }
});

test('modify return object by getTodo does not modify original object in list', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.getTodo(1).month = 5;
  return todoList.getTodo(1).month === 1;
});

test('modify return object by todos() does not modify original array or object in array', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  let listCopy = todoList.todos();
  listCopy.pop();
  listCopy[0].month = 1;
  return todoList.getTodo(1).month === 1 && todoList.todos().length === 4;
});

testError('initialize with collection when list is not empty raise error', function() {
  todoList.resetList();
  todoList.add(todoData1);
  todoList.initialize(todoSet);
}, 'List already exist, use add instead');

testError('update with invalid title raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {title: '  '});
}, 'Title can not be empty');

testError('update with invalid status raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {completed: '  '});
}, 'Not a valid status');

testError('update with invalid description raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {description: '', title: 'should not change'});
}, 'Description can not be empty');

testError('update with invalid month raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {description: 'should not change', title: 'should not change', year:'1980', month:'67'});
}, 'Not a valid month');

testError('update with invalid year raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {description: 'should not change', title: 'should not change', year:'900', month:'12'});
}, 'Not a valid year');

testError('attempt to update id raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {description: 'should not change', title: 'should not change', year:'1989', month:'12', id: 2});
}, 'contains invalid todo properties');

testError('attempt to update with invalid id raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(10, {description: 'should not change', title: 'should not change', year:'1989', month:'12'});
}, 'This id does not exist');

test('failed update does not partialy update object', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  try {
    todoList.update(1, {description: 'should not change', title: 'should not change', year:'900', month:'12'});
  } catch (error) {
    let todo1 = todoList.getTodo(1);
    return (
      todo1.title === 'Buy Milk' &&
      todo1.month === 1 &&
      todo1.year === 2017 &&
      todo1.completed === false &&
      todo1.description === 'Milk for baby' &&
      todo1.id === 1
    );
  }
});

test('update obj1 with valid data', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {year: '2018', month: '11', title: 'this should change', completed: 'true'});
  let todo1 = todoList.getTodo(1);
  return (
    todo1.title === 'this should change' &&
    todo1.month === 11 &&
    todo1.year === 2018 &&
    todo1.completed === true &&
    todo1.description === 'Milk for baby' &&
    todo1.id === 1
  );
});

test('update obj3 with valid data empty yr mth', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(3, {year: '', month: '', title: 'this should change'});
  let todo3 = todoList.getTodo(3);
  let today = new Date();
  return (
    todo3.title === 'this should change' &&
    todo3.month === today.getMonth() + 1 &&
    todo3.year === today.getFullYear() &&
    todo3.completed === false &&
    todo3.description === 'For the cheat day' &&
    todo3.id === 3
  );
});

test('delete obj2', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.delete(2);
  return (todoList.todos().length === 3);
});

testError('delete non-existing id raise error', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.delete(9);
},'This id does not exist');

test('todoManager all', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  let objIds = todoManager.all().map(obj => obj.id);
  let expected = [1, 2, 3, 4];
  if (expected.length !== objIds.length) return false;
  for (let index = 0; index < objIds.length; index += 1) {
    if (objIds[index] !== expected[index]) return false;
  }
  return true;
});

test('todoManager completed', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {month: '12', year: '2019', completed: 'true'});
  todoList.update(2, {month: '11', year: '2018', completed: 'true'});
  let objIds = todoManager.completed().map(obj => obj.id);
  let expected = [1, 2];
  if (expected.length !== objIds.length) return false;
  for (let index = 0; index < objIds.length; index += 1) {
    if (objIds[index] !== expected[index]) return false;
  }
  return true;
});

test('todoBy 12 2018', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {month: '12', year: '2019', completed: 'true'});
  todoList.update(2, {month: '11', year: '2018', completed: 'true'});
  let objIds = todoManager.todoBy(12, 2018).map(obj => obj.id);
  let expected = [2];
  if (expected.length !== objIds.length) return false;
  for (let index = 0; index < objIds.length; index += 1) {
    if (objIds[index] !== expected[index]) return false;
  }
  return true;
});

test('completedBy 12 2017', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {month: '12', year: '2019', completed: 'true'});
  todoList.update(2, {month: '11', year: '2018', completed: 'true'});
  let objIds = todoManager.completedBy(12, 2017).map(obj => obj.id);
  let expected = [];
  if (expected.length !== objIds.length) return false;
  for (let index = 0; index < objIds.length; index += 1) {
    if (objIds[index] !== expected[index]) return false;
  }
  return true;
});

test('completedBy 12 2019', function() {
  todoList.resetList();
  todoList.initialize(todoSet);
  todoList.update(1, {month: '12', year: '2019', completed: 'true'});
  todoList.update(2, {month: '11', year: '2018', completed: 'true'});
  let objIds = todoManager.completedBy(12, 2019).map(obj => obj.id);
  let expected = [1, 2];
  if (expected.length !== objIds.length) return false;
  for (let index = 0; index < objIds.length; index += 1) {
    if (objIds[index] !== expected[index]) return false;
  }
  return true;
});
