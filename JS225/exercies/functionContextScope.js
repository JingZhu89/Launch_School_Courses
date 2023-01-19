// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies())

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(this));
//   },
// };

// console.log(franchise.allMovies())

// function test() {
//   console.log(this.a, this.b);
// }

// let obj = {a: 1, b: 2};

// function bind(func, context, ...partialArgs) {
//   return function(...remainingArgs) {
//     let args = partialArgs.concat(remainingArgs);
//     return func.apply(context, [args]);
//   } 
// }

// function myFilter(array, func, context) {
//   const result = [];

//   array.forEach(value => {
//     if (func.call(context, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// const filter = {
//   allowedValues: [5, 6, 9],
// };

// console.log(myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
//   return this.allowedValues.includes(val);
// }, filter)); // returns [5, 6]

// function newStack() {
//   let stack = [];
//   return {
//     push(element) {
//       stack.push(element);
//     },
//     pop() {
//       stack.pop();
//     },
//     printStack() {
//       stack.forEach(element => console.log(element));
//     }
//   }
// }

// let stack = newStack();
// stack.push('a');

// stack.push('b');

// stack.push('c');
// stack.pop();
// stack.printStack();

// const name = 'Naveed';
// const greeting = 'Hello';

// const greeter = {
//   message: (function(){
//     const name = 'Naveed';
//     const greeting = 'Hello';
//     return `${greeting} ${name}!`;
//   })(),
//   sayGreetings() {
//     console.log(this.message);
//   }
// };

// greeter.sayGreetings()



function createStudent(name, year) {
  return {
    name,
    year,
    info() {
      console.log(`${this.name} is a ${year} student`);
    },
    courses:[],
    listCourses() {
      console.log(this.courses);
    },
    addCourse(obj) {
      this.courses.push(obj);
    },
    addNote(code, note) {
      let index = this.getCourseIndex(code);
      if (index >= 0 && this.courses[index].note) {
        this.courses[index].note += `; ${note}`;
      } else if (index >= 0 && !this.courses[index].note) {
        this.courses[index].note = note
      }
    },
    getCourseIndex: function(code) {
      for (let index = 0; index < this.courses.length; index += 1) {
        if (this.courses[index].code === code) return index
      }
      return -1;
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      })
    },
    updateNote(code, note) {
      let index = this.getCourseIndex(code);
      if (index >= 0) {
        this.courses[index].note = note
      }
    }
  }
}

function createSchool() {
  let students = [];
  return {
    addStudent(name, year) {
      const yrs = ['1st', '2nd','3rd','4th','5th'];
      if (yrs.includes(year)) {
        let student = createStudent(name, year);
        students.push(student);
        return student
      } else {
        console.log('Invalid year');
      }
    },
    enrollStudent(studentName, courseObj) {
      let student = this.getStudent(studentName)
      student.addCourse(courseObj);
    },

    addGrade(studentName, courseCode, grade) {
      let student = this.getStudent(studentName);
      let course = student.courses[student.getCourseIndex(courseCode)];
      course.grade = grade; 
    },

    getStudent(studentName) {
      return students.filter(student => studentName === student.name)[0];
    },

    getReportCard(studentName) {
      let student = this.getStudent(studentName);
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`)
        } else {
          console.log(`${course.name}: In progress`)
        }
      })
    },

    courseReport(courseName) {
      console.log(`=${courseName}=`)
      let grades = students.reduce(([total, ct], student) => {
        let courses = student.courses;
        let course = courses.filter(course => course.name === courseName)[0];
        if (course && course.grade) {
          console.log(`${student.name}: ${course.grade}`)
          total += course.grade;
          ct += 1;
        }
        return [total, ct];
      },[0,0])
      console.log('---')
      console.log(`Course Average: ${grades[0]/grades[1] || 'Undefined'}`)
    }
  }
}

let school = createSchool();
school.addStudent('foo','3rd');
school.addStudent('bar','1st');
school.addStudent('qux','2nd');
school.enrollStudent('foo', {name: 'Math', code: 101});
school.enrollStudent('foo', {name: 'Advanced Math', code: 102});
school.enrollStudent('foo', {name: 'Physics', code: 202});
school.enrollStudent('bar', {name: 'Math', code: 101});
school.enrollStudent('qux', {name: 'Math', code: 101});
school.enrollStudent('qux', {name: 'Advanced Math', code: 102});
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);
school.addGrade('bar', 101, 91);
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard('foo');
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');