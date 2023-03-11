// use /api/bookings to get all dates with bookings and display in ul
document.addEventListener('DOMContentLoaded', () => {
  let ul = document.querySelector('UL');
  let xhr = new XMLHttpRequest();
  const link = '/api/bookings/'
  let dates;
  xhr.open('GET','/api/bookings');
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    dates = xhr.response
    populateli();
  })
  xhr.send()

  ul.addEventListener('click', event => {
    event.preventDefault();
    let li = event.target;
    li.children[0].removeAttribute('hidden');
  })

  function populateli() {
    dates.forEach(async (date) => {
      let li = document.createElement('li');
      li.textContent = date;
      let subUl = document.createElement('ul');
      ul.appendChild(li);
      li.appendChild(subUl);
      subUl.setAttribute('hidden','hidden');
      let bookings = await getBookings(date);
      populateSubli(bookings, subUl);
    })
  }

  function getBookings(date) {
    return new Promise(resolve => {
      let getbookings = new XMLHttpRequest();
      getbookings.open('GET',link + date);
      getbookings.responseType = 'json';
      getbookings.addEventListener('load', ()=> {
        resolve(getbookings.response);
      })
      getbookings.send();
    })
  }

  function populateSubli(bookings, ul) {
    bookings = bookings.map(subarr => {
      return subarr[0] + " | " + subarr[1] + " | " + subarr[2];
    })
    bookings.forEach(str => {
      let subLi = document.createElement('li');
      subLi.textContent = str;
      ul.appendChild(subLi);
    });

  }

})

// use /api/bookings/:date to display bookings under each date