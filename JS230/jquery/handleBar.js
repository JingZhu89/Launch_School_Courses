let post = [{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
  tags: ['#news', '#spanish'],
},{
  title: 'just a test',
  published: 'somthing else',
  body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
}]

$(function() {
let blogTemplate = Handlebars.compile($('#post').html());
Handlebars.registerPartial(
  'tag',
  $('#tag').html()
);

$('body').html(blogTemplate({items: post}));
})