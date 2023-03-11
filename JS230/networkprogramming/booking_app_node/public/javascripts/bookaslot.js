
document.addEventListener('DOMContentLoaded', () => {
  let select = document.querySelector('SELECT');
  let formBook = document.getElementById('book');
  let formStudent;
  let loadStaff = new Promise((resolve, reject) => {
    let xhrStaff = new XMLHttpRequest();
    xhrStaff.open('GET', '/api/staff_members');
    xhrStaff.addEventListener('load', () => {
      let response = JSON.parse(xhrStaff.response)
      if (xhrStaff.status === 200) {
        resolve(response);
      } else {
        reject(response)
      }
    });
    xhrStaff.send();
  });

  function loadSchedules(staffs) {
    let schedules = [];
    staffs.forEach(staff => {
      schedules.push(new Promise((resolve, reject) => {
        let staff_id = staff.id;
        let staffSchedule = new XMLHttpRequest();
        staffSchedule.open('GET', `/api/schedules/${staff_id}`);
        staffSchedule.addEventListener('load', () => {
          let response = JSON.parse(staffSchedule.response);
          if (staffSchedule.status === 200) {
            resolve(response.filter(slot => slot.student_email === null));
          } else {
            reject(response);
          } 
        })
        staffSchedule.send();
      }))
    });
    return schedules
  }

  (async function () {
    let staffs = await loadStaff;
    let schedules = await Promise.all(loadSchedules(staffs));
    schedules.forEach((staffSchedule, staffIndex) => {
      staffSchedule.forEach(slot => {
        let content = (staffs[staffIndex].name + ' | ' + slot.date + ' | ' + slot.time);
        let option = document.createElement('option');
        option.textContent = content;
        option.value = slot.id;
        select.appendChild(option);
      })
    });
  })()

  formBook.addEventListener('submit', event => {
    event.preventDefault();
    if (document.getElementById('student')) {
      document.getElementById('student').reset();
      return;
    }
    let data = {id: Number(formBook.schedule.value), student_email: formBook.email.value}
    let json = JSON.stringify(data);
    let book = new XMLHttpRequest();
    book.open('POST', formBook.action);
    book.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    book.addEventListener('load', () => {
      if (book.status === 204) {
        window.alert(book.responseText);
      } else {
        let match = book.response.match(/[0-9]+/);
        if (match) {
          window.alert(book.responseText);
          let sequence = match[0];
          populateNewStudentRegister(sequence);
          addStudentFormHandler();
        } else {
          window.alert(book.responseText);
        }
      }
    })
    book.send(json);
  });

  function populateNewStudentRegister(sequence) {
    let formStudent = document.createElement('form');
    formStudent.setAttribute('id', 'student');
    formStudent.setAttribute('action', '/api/students')
    formStudent.setAttribute('method', 'post')
    formBook.parentNode.appendChild(formStudent);
// header
    let h1 = document.createElement('h1');
    h1.textContent = 'Please provide student detail';
    formStudent.appendChild(h1);

// email label
    let studentEmailLabel = document.createElement('label');
    formStudent.appendChild(studentEmailLabel);
    studentEmailLabel.setAttribute('for', 'student_email');
    studentEmailLabel.textContent = 'Email:';

// email
    let studentEmail = document.createElement('input');
    studentEmailLabel.appendChild(studentEmail);
    studentEmail.setAttribute('type', 'email');
    studentEmail.setAttribute('id', 'student_email');
    studentEmail.setAttribute('name', 'student_email');
    studentEmail.setAttribute('value', formBook.email.value)
// name label
    let studentNameLabel = document.createElement('label');
    formStudent.appendChild(studentNameLabel);
    studentNameLabel.setAttribute('for', 'student_name');
    studentNameLabel.textContent = 'Name:';
// name
    let studentName = document.createElement('input');
    studentNameLabel.appendChild(studentName);
    studentName.setAttribute('type', 'text');
    studentName.setAttribute('id', 'student_name');
    studentName.setAttribute('name', 'student_name');

// sequence label
    let sequenceLabel = document.createElement('label');
    formStudent.appendChild(sequenceLabel);
    sequenceLabel.setAttribute('for', 'sequence');
    sequenceLabel.textContent = 'Booking sequence:';
// sequence
    let bookingSequence = document.createElement('input');
    sequenceLabel.appendChild(bookingSequence);
    bookingSequence.setAttribute('type', 'text');
    bookingSequence.setAttribute('id', 'sequence');
    bookingSequence.setAttribute('name', 'sequence');
    bookingSequence.setAttribute('value', sequence);

    let submit = document.createElement('input');
    submit.setAttribute('type','submit');
    formStudent.appendChild(submit);
  }

  function addStudentFormHandler() {
    formStudent = document.querySelector('#student');
    formStudent.addEventListener('submit', event => {
      event.preventDefault();
      let add = new XMLHttpRequest();
      add.open('POST', formStudent.action);
      add.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      data = {
        email: formStudent.student_email.value,
        name: formStudent.student_name.value,
        booking_sequence: formStudent.sequence.value
      }
      let json = JSON.stringify(data)
      add.addEventListener('load', () => {
        if (add.status === 201) {
          window.alert(add.responseText);
          let newaddbooking = new XMLHttpRequest();
          newaddbooking.open('POST', formBook.action);
          let booking_data = {id: Number(formBook.schedule.value), student_email: formBook.email.value};
          newaddbooking.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          let bookingJson = JSON.stringify(booking_data);
          newaddbooking.addEventListener('load', () => {
            if (newaddbooking.status === 204) {
              window.alert('Booked');
            } else {
              window.alert(newaddbooking.responseText);
            }
          });
          newaddbooking.send(bookingJson);
        } else {
          window.alert(add.responseText);
          formStudent.reset();
        }
      });
      add.send(json)
    });
  }
})