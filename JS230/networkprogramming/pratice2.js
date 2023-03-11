let request = new XMLHttpRequest();
request.open('POST', 'link');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let data = JSON.stringify({
  name: 'Jing',
  sku: 'just a test',
  price:  54
})
send(data)