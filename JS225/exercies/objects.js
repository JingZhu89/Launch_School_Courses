// function createGreeter(name) {
//   return {
//     name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// function item() {
//   return {
//     name: 'Foo',
//     description: 'Fusce consequat dui est, semper.',
//     price: 50,
//     quantity: 100,
//     discount(percent) {
//       const discount = this.price * percent / 100;
//       this.price -= discount;
  
//       return this.price;
//     },
//   }
// };

// console.log(item().discount(20))   // should return 40

// console.log(item().discount(50))  // should return 25

// console.log(item().discount(25))   // should return 37.5

// function objectsEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   for (let prot in obj1) {
//     if (!obj2.hasOwnProperty(prot) || (typeof obj1[prot] !== typeof obj2[prot])) return false
//     if (typeof obj1[prot] === 'object' || typeof obj1[prot] === 'array' )  {
//       if (!objectsEqual(obj1[prot], obj2[prot])) return false;
//     } else if (obj1[prot] !== obj2[prot]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
// console.log(objectsEqual({a: 'foo', b: {a:1, c:3}}, {a: 'foo', b: {a:1, c:3}})); // true

// console.log(objectsEqual({a: 'foo', b: [1, 3]}, {a: 'foo', b: [1, 3]})); // true

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

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

function createSchool() {
  return {
    students: [],
    addStudent(name, year) {
      const yrs = ['1st', '2nd','3rd','4th','5th'];
      if (yrs.includes(year)) {
        let student = createStudent(name, year);
        this.students.push(student);
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
      return this.students.filter(student => studentName === student.name)[0];
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
      let grades = this.students.reduce(([total, ct], student) => {
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
console.log(school.students[0].courses);
school.getReportCard('foo');
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');