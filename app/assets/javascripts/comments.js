
$(document).on('turbolinks:load',function(){

    $("body").on('click','.comment-button',function(){
        // $(this).next().remove();
        // $('.comment-form').after().remove();
        // $('.comment-form').remove();

        $(this).click(function(){
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
             console.log("success fected comments to display");
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
            
        return false;
        }
        )
        // return true;
        
    })


    $("body" ).on( "submit", '.comment-form' ,function( event ) {
        event.preventDefault();

        $(this).submit(function() {
            data=$( this ).serialize();
            $.ajax({
                method: "POST",
                url: "comments/create",
                data: data
            }
            ).done(function(){
                // console.log(msg);
                console.log("success");
                // document.querySelector(".comment-button").click();
            }
            )
            return false;
        });



      });

    //   $("body").onClick


    $("body").on('click','.comment-reply-link', function(e){
        e.preventDefault();
        parent_id = this.getAttribute("data-parent-id");
        post_id = this.getAttribute("data-post-id");    


        console.log("clicked on reply");
        $('.comment-reply-link').after(
               "<form class='comment-form'> <div class='form-group comment-box'> <input type='hidden' name='post_id' value="+post_id+"> <input type='hidden' name='parent_id' value="+parent_id+">  <input type='text' class='form-control' name='content' placeholder='reply...'> <button type='submit' class='btn btn-primary reply-submit-button margin_for_button' >reply</button> </div></form>"
            );

    }
    )


    $("body").on('submit','.reply-submit-button',function(e){
        e.preventDefault();
        // parent_id = this.getAttribute("data-parent-id");
        // post_id = this.getAttribute("data-post-id");  
          data = $(this).serialize();

        $.ajax({
            method: "POST",
            url: "/comments/create_replies",
            data: data,
        }
        ).done(function(){
            console.log("in function")

        }
        )

    }
    )





     
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
