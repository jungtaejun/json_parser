function makeList(index, work) {
  var element = []

  if(index % 2 === 0) {
    element.push('<div class="row">')
  } else {
    element.push('<div class="row bg-gray">')
  }
  element.push('<div class="col-1">' + work.category + '</div>')
  element.push('<div class="col-3">' + work.title + '</div>')
  element.push('<div class="col-4">' + work.subTitle + '</div>')
  element.push('<div class="col-1">' + work.all + '</div>')
  element.push('<div class="col-3">' + work.url + '</div>')
  element.push('</div>')
  return element.join('') 
}

$(document).ready(function(){
  var html =[];
  
  for(var j=0; j < works.length; j++) {
    var work = works[j]
    // html.push(makeList(j, work))
  }
  
  for (var key in works) {
    var work = works[key]
    var el = makeList(key, work)
    html.push(el)
  }

  var i=0;
  for(var work of works) {
    //console.log(makeList(i, work))
    //html.push(makeList(i, work))
    i++
  }
  $('.data').html(html.join(''))
});

