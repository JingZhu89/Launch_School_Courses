$(function () {
  let $anchor = $('a')
  $('form').on('submit', function(event) {
    event.preventDefault();
    character = $(this).find('input[type=text]').val();

    $(document).off('keypress').on('keypress', function(e) {
      if (e.key !== character) {
        return;
      } else {
        $anchor.trigger('click');
      }
    })
  })
  $anchor.on('click', function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();
  })
})

let products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

let productTemplate = Handlebars.compile($('#productTemplate').html());
let $list = $('ul');

$list.html(productTemplate({ items: products }));

