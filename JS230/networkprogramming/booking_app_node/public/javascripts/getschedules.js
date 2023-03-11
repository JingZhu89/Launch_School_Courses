document.addEventListener('DOMContentLoaded', () => {
  let h1 = document.createElement('h1');
  h1.textContent = 'Schedules';
  let ul = document.createElement('ul');

  let request = new XMLHttpRequest();
  request.open('GET','/api/schedules');
  request.timeout = 5000;
  request.ontimeout = () => {
    window.alert('Timeout, please try again');
  }
  request.addEventListener('load', event => {
    let resposne = JSON.parse(request.response)
    document.querySelector('BODY').appendChild(h1);
    document.querySelector('BODY').appendChild(ul);
    if (resposne.length === 0) {
      window.alert('No schedule found');
    } else {
      let staffScheduleList = countSchedule(resposne);
      for (let prop in staffScheduleList) {
        let li = document.createElement('li');
        li.textContent = `${prop}: ${staffScheduleList[prop]}`;
        ul.appendChild(li)
      }
    }
  })
  request.send();
})

function countSchedule(schedules) {
  let scheduleCount = {};

  schedules.forEach(schedule => {
    let staff = 'staff ' + schedule.staff_id.toString(); 
    if (scheduleCount[staff]) {
      scheduleCount[staff] += 1;
    } else {
      scheduleCount[staff] = 1;
    }
  })

  return scheduleCount;
}
