// const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
//              'call plumber', 'feed fido', 'get gas',  'organize closet'];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log('That task is already on the list.');
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     todos.splice(0,1);
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log('All tasks complete!');
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {
//   console.log(`ToDo list (${todos.length} tasks):`)
//   console.log('---------------------');

//   for (let i = 0; i < todos.length; i++) {
//     console.log(`-- ${todos[i]}`);
//   }
// }

// // Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();

const memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^[a-zA-Z]+ [a-zA-Z]+$/).test(name);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);