class

// create Contcat
document.addEventListener('DOMContentLoaded', () => {
  // get add contact button
  let form = document.querySelector('form')
  document.getElementById('addContact').addEventListener('click', function(event) {
    event.preventDefault();
    //get form
    form.className = null
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let data = {
      full_name: form.name.value,
      email: form.email.value,
      phone_number: form.phone.value,
      tags: form.tag.value
    }
    fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        window.alert(`${data.full_name}'s contact was added`) 
      })
      .catch((error) => {
        console.log('unable to add contact')
      })
  })
  let contactTemplate = Handlebars.compile(document.getElementById('contactTemplate').innerHTML);
})

// get  template

