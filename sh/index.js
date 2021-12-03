// $(document).ready(function(){
//    console.log(works) 
// }  

$(document).ready(function() {
    const elements = []
    for(const row of works) {
        const element = `
            <div class="row">
                <div class="col-1">`+row.category+`</div>
                <div class="col-3">`+row.title+`</div>
                <div class="col-4">`+row.subTitle+`</div>
                <div class="col-1">`+row.all+`</div>
                <div class="col-3">`+row.url+`</div>
            </div>
        `
        elements.push(element)
    } 
    $('.list-body').html(elements)
});
