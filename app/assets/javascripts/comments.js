
$(document).on('turbolinks:load',function(){

    $("body").on('click','.comment-button',function(){
        $(this).next().remove();
        $('.comment-form').remove();
        user_id = this.getAttribute("data-user-id");
        post_id = this.getAttribute("data-post-id");       
        console.log("comment")
        $(this).after(
            "<form class='comment-form'> <div class='form-group comment-box'> <input type='hidden' name='postid' value="+post_id+"> <input type='hidden' name='userid' value="+user_id+">  <input type='text' class='form-control' name='comment' placeholder='comment...'> <button type='submit' class='btn btn-primary margin_for_button' >comment</button> </div></form>"
        )
    })


    $("body" ).on( "submit", '.comment-form' ,function( event ) {
        event.preventDefault();
        // console.log( $( this ).serialize() );
        
      });
      
}

)












// function commentajax(event){
//     event.preventDefault();
//     console.log("commentAjax");

//     $.ajafunction commentajax(event){
//     event.preventDefault();
//     console.log("commentAjax");

//     $.ajax

// }x

// }
