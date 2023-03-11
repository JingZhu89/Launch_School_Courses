let fetchData = async function() {
  let slides = document.querySelector('#slides');
  let sectionHeader = document.querySelector('section>header');
  let form = document.querySelector('form');
  async function photodata() {
    return fetch(
      '/photos',
      {method: 'GET'},
    ).then((response) => response.json())
    .then((data) => data);
  } 
  let photoData = await photodata()
  renderPhotos(photoData, slides);
  renderPhotoInfo(1, photoData);
  renderPhotoComment(1);

  let previous = document.querySelector('.prev');
  previous.addEventListener('click', async (e) => {
    e.preventDefault();
    let first = slides.firstElementChild;
    let last = slides.lastElementChild;
    slides.insertBefore(last, first);
    let id = slides.firstElementChild.dataset.id;
    let photoData = await photodata()
    renderPhotoInfo(id, photoData);
    renderPhotoComment(id);
  });

  let next = document.querySelector('.next');
  next.addEventListener('click', async (e) => {
    e.preventDefault();
    let first = slides.firstElementChild;
    slides.appendChild(first);
    let id = slides.firstElementChild.dataset.id;
    let photoData = await photodata()
    renderPhotoInfo(id, photoData);
    renderPhotoComment(id);
  });

  sectionHeader.addEventListener('click', async (e) => {
    e.preventDefault();
    let id = slides.firstElementChild.dataset.id;
    if (e.target.dataset.property === 'likes') {
      fetch(
        '/photos/like',
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'photo_id': id})
        },
      ).then((response) => response.json())
      .then((data) => e.target.textContent = '♡ ' + data.total + ' Likes');
    }
    else if (e.target.dataset.property === 'favorites') {
      fetch(
        '/photos/favorite',
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'photo_id': id})
        },
      ).then((response) => response.json())
      .then((data) => e.target.textContent = '☆ ' + data.total + ' Favorites');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.currentTarget.photo_id.value = slides.firstElementChild.dataset.id;
    let data = new FormData(e.currentTarget);
    fetch(
      e.currentTarget.action,
      {
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams([...data])
      }
    ).then((response) => response.json())
    .then(() => renderPhotoComment(slides.firstElementChild.dataset.id))
  })
}

document.addEventListener('DOMContentLoaded', 
fetchData
)

function renderPhotos(photoData, slides) {
  let photos = document.querySelector('#photos');
  let photoTemplate = Handlebars.compile(photos.innerHTML);
  slides.insertAdjacentHTML('beforeend', photoTemplate({photos: photoData}))
}

function renderPhotoInfo(index, photoData) {
  let photo = photoData.filter(photo => {
    return photo.id == index;
  })[0];
  let sectionHeader = document.querySelector('section>header');
  let photo_information = document.querySelector('#photo_information');
  let photoInfoTemplate = Handlebars.compile(photo_information.innerHTML);
  sectionHeader.innerHTML = photoInfoTemplate(photo);
}

async function renderPhotoComment(index) {
  let commentData = await fetch(
    `/comments?photo_id=${index}`,
    {method: 'GET'},
  ).then((response) => response.json())
  .then((data) => data);

  let photoComment = document.querySelector('#photo_comment');
  let photoComments = document.querySelector('#photo_comments')
  let commentsUl = document.querySelector('#comments ul');
  let partialTemplate = Handlebars.compile(photoComment.innerHTML);
  let commentTemplate = Handlebars.compile(photoComments.innerHTML);
  Handlebars.registerPartial('photo_comment', partialTemplate);
  commentsUl.innerHTML = commentTemplate({comments: commentData});
}
