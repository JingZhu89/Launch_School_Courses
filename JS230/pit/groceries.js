const groceries = {groceries: []};
$(function() {
  let grocerTemplate = Handlebars.compile($('#groceryTemplate').html());
  let $list = $('ul');
  $('form').on('submit', function(event) {
    event.preventDefault();
    let quantity = Math.max(1, $('input[name="quantity"]').val());
    let name = $('input[name="name"]').val();
    groceries.groceries.push({name, quantity});
    $list.html(grocerTemplate(groceries));
  })
})