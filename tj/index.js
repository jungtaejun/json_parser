$(document).ready(function(){
  console.log(works)

  var html =[];

    for(var i = 0; i < works.length; i++) {
      html.push(works[i].category + ' ');
      html.push(works[i].title + ' ');
      html.push(works[i].subTitle + ' ');
      html.push(works[i].all + ' ');
      html.push(works[i].url + ' ');
      html.push('<br>')
      html.push('<br>')
    }
    $('.data').html(html.join(''));
});

