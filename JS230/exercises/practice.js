let postRequest = new XMLHttpRequest();
postRequest.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
postRequest.setRequestHeader('Authorization','token AUTH_TOKEN');
postRequest.setRequestHeader('Content-Type','application/json; charset=utf-8');
data = JSON.stringify({name: 'somthing', sku: 'abc', price: 123})
postRequest.send(data);
