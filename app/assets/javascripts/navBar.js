function onSearchButtonClick () {
    $(".search-results").hide();
  let text = $('.search_container_input').val();
  console.log(text);
  if(text.length) {
    $.ajax({
        method: "GET",
        url: "/features/search_user",
        data: { search_text: text }
      })
      .done(function ( data ) {
        if(data.length) {
            let wrapper = $('.search-results').empty().show();
            console.log(data);
            for ( let obj of data ){
            let a = $('<a href='+ '/users/'+ obj.id +'></a>').text(obj.name);
            wrapper.append($('<div class="search-results-row"></div>').append(a));
            }
        }
      });
  }
}




function bowbow(){
  console.log("bow bow");
}

