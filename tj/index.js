function makeList(index, work) {
  var element = []
  // switch (index) {
  //   case 0:
  //     a()
  //     break;
  //   case 1:
  //     b()
  //     break;
  //   case 2:
  //   case 3:
  //   case 4:
  //     c()
  //     break;
  //   default:
  //     z()
  //     break;
  // }
  if(index % 2 === 0){
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
    var el = makeList(j, work)
    html.push(el)
  }
  
  for (var key in works) {
    var work = works[key]
    for(var key2 in work) {
      console.log(key2)
    }
    html.push(makeList(key, work))
  }

  var i=0;
  for(var work of works) {
    console.log(makeList(i, work))
    // html.push(makeList(i, work))
    i++
  }
  $('.data').html(html.join(''))
  var arr = []
  arr.push('안')
  arr.push('상')
  arr.push('현')
  console.log(arr.join(''))//안/상/현 


  
});

