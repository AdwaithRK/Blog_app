
$(document).on('turbolinks:load',function(){

    $("body").on('click','.comment-button',function(){
        $(this).next().remove();
        $('.comment-form').remove();
        user_id = this.getAttribute("data-user-id");
        post_id = this.getAttribute("data-post-id");    
    
        console.log("comment")
        $(this).after(
            "<form class='comment-form'> <div class='form-group comment-box'> <input type='hidden' name='post_id' value="+post_id+"> <input type='hidden' name='userid' value="+user_id+">  <input type='text' class='form-control' name='content' placeholder='comment...'> <button type='submit' class='btn btn-primary margin_for_button' >comment</button> </div></form>"
        )

        $.ajax({
            method: "GET",
            url: "comments/fetch_comment",
            data: {post_id: post_id}
        }
        ).done(function(data){
        //     // console.log(msg);
             console.log("success");
        // }
           console.log(data.comments)
           comments=data.comments;
           if(comments.length){
               (comments).forEach(function(comment){
                   $('.comment-form').after(
                     "<div class='comment-parent'><div class='card-body'>"+comment.content+"</div> <div class='card-footer'> <a href='' class='comment-reply-link' data-post-id="+post_id+" data-parent-id="+ comment.id +"> reply</a> </div> </div>"
                   )
               }
               )
           }
        }
        )
    })


    $("body" ).on( "submit", '.comment-form' ,function( event ) {
        event.preventDefault();
         data=$( this ).serialize();

        $.ajax({
            method: "POST",
            url: "comments/create",
            data: data
        }
        ).done(function(){
            // console.log(msg);
            console.log("success");
        }
        )
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
