document.addEventListener('DOMContentLoaded', event => {
  let xhrStaff = new XMLHttpRequest();
  let staff;
  let select = document.querySelector('SELECT')
  let schedules = document.getElementsByTagName('FIELDSET')
  let addSchedule = document.querySelector('BUTTON')
  let submit = document.querySelector('[type=submit]');
  let form = document.querySelector('FORM');

  //------get staff list
  xhrStaff.open('GET', '/api/staff_members');
  xhrStaff.responseType='json';
  xhrStaff.addEventListener('load', () => {
    staff = xhrStaff.response;
    staff.forEach(stf => {
      let option = document.createElement('option');
      option.textContent = stf.name;
      option.value = stf.id;
      select.appendChild(option)
    })
  })
  xhrStaff.send();

  //-------copy filed set
  addSchedule.addEventListener('click', (event) => {
    event.preventDefault();
    lastSchedule = schedules[schedules.length - 1];
    let newSchedule = lastSchedule.cloneNode(true);
    scheduleName = newSchedule.firstElementChild.textContent;
    newScheduleName = scheduleName.slice(0, -1) + (Number(scheduleName.slice(-1)) + 1);
    newSchedule.firstElementChild.textContent = newScheduleName;
    newScheduleName = newScheduleName.toLowerCase();
    newSchedule.querySelector('SELECT').id = newScheduleName + 'staff';
    newSchedule.querySelector('[type=date]').id = newScheduleName + 'date';
    newSchedule.querySelector('[type=time]').id = newScheduleName + 'time';
    let labels = Array.from(newSchedule.querySelectorAll('LABEL'));
    labels.forEach(label => {
      newAttribute = newScheduleName + label.getAttribute('for').slice(9);
      label.setAttribute('for', newAttribute);
    })
    lastSchedule.parentNode.insertBefore(newSchedule, submit);
  })

  //--------submit form
  form.addEventListener('submit', event => {
    let xhrAdd = new XMLHttpRequest();
    xhrAdd.open('POST', '/api/schedules');
    xhrAdd.setRequestHeader('Content-Type', 'application/json');
    let data = {"schedules": []};
    event.preventDefault();
    for (let i = 0; i < schedules.length; i +=1) {
      data.schedules.push(getFormData(schedules[i]))
    }
    let json = JSON.stringify(data)
    xhrAdd.addEventListener('load', event => {
      alert(xhrAdd.responseText);
    })
    xhrAdd.send(json);
  })
});

function getFormData(schedule) {
  let scheduleName = schedule.firstElementChild.textContent.toLowerCase();
  let staff_id = document.getElementById(scheduleName + 'staff').value;
  let date = document.getElementById(scheduleName + 'date').value;
  let time = document.getElementById(scheduleName + 'time').value;
  return {staff_id, date, time}
}


