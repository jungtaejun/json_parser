$(document).ready(function(){
  console.log(works)

  var html =[];
  var i=0;
  for(var work of works) {
    if(i%2 === 0){
      html.push('<div class="row">')
    }
    else {
      html.push('<div class="row bg-gray">')
    }
    html.push('<div class="col-1">' + work.category + '</div>')
    html.push('<div class="col-3">' + work.title + '</div>')
    html.push('<div class="col-4">' + work.subTitle + '</div>')
    html.push('<div class="col-1">' + work.all + '</div>')
    html.push('<div class="col-3">' + work.utl + '</div>')
    html.push('</div>')
    i++
  }
  $('.data').html(html.join(''))
});

