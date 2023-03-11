document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('FORM');
  let request = new XMLHttpRequest();
  request.open('POST', '/api/staff_members');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.responseType = 'json';
  form.addEventListener('submit', (event)=> {
    event.preventDefault();
    let email = form.email.value;
    let name = form.name.value;
    if (emailValidation(email) && nameValidation(name)) {
      let data = {name: name, email: email}
      let json = JSON.stringify(data);
      request.send(json)
      form.reset();
    }
  });

  request.addEventListener('load', () => {
    let id = request.response.id;
    window.alert(`new staff created with id :${id}`)
  })

})


function emailValidation(email) {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    window.alert('Invalid entry, check your input');
    return false;
  } else {
    return true;
  }
}

function nameValidation(name) {
  let invalidName = /^\s*$/
  if (name.match(invalidName)) {
    window.alert('Invalid entry, check your input');
    return false;
  } else {
    return true;
  }
}
