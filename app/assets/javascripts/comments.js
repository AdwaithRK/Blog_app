
$(document).on('turbolinks:load',function(){

    $("body").on('click','.comment-button',function(){
        // $(this).next().remove();

        console.log("comment")
        user_id = this.getAttribute("data-user-id");
        post_id = this.getAttribute("data-post-id");    
        $("#comment-box-"+post_id+"").remove();

        console.log("comment")
        $(this).after(
            "<form class='comment-form' id='comment-box-"+post_id+"'> <div class='form-group comment-box'> <input type='hidden' name='post_id' value="+post_id+"> <input type='hidden' name='userid' value="+user_id+">  <input type='text' class='form-control' name='content' placeholder='comment...'> <button type='submit' class='btn btn-primary margin_for_button' >comment</button> </div></form>"
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
                   $("#comment-box-"+post_id+"").append(
                     "<div class='comment-parent reply-margin'><div class='card-body'>"+comment.content+"</div> <div class='card-footer'> <a href='' id = 'reply-link-"+comment.id+"' class='comment-reply-link' data-post-id="+post_id+" data-parent-id="+ comment.id +"> reply</a> </div> </div>"
                   )
               }
               )
           }
        }
        );

        // $(this).click(function(){
        //   return false;
        // })
        // return true;
        
    })


    $("body" ).on( "submit", '.comment-form' ,function( event ) {
        event.preventDefault();

        data=$( this ).serialize();
        content=$(this.elements["content"]).val();
        post_id=$(this.elements["post_id"]).val();

        $.ajax({
            method: "POST",
            url: "comments/create",
            data: data
        }
        ).done(function(data){
            console.log("added comments with id "+data.id);
            console.log(data);
            console.log("success");
            // document.querySelector(".comment-button").click();
            $("#comment-box-"+post_id+"").append(
                "<div class='comment-parent reply-margin'><div class='card-body'>"+content+"</div> <div class='card-footer'> <a href='' id = 'reply-link-"+data+"' class='comment-reply-link' data-post-id="+post_id+" data-parent-id="+data +"> reply</a> </div> </div>"
            )
            // $("#comment-box-"+post_id+"").remove();

        }
        )

        // $(this).submit(function() {

        //     return false;
        // });






      });

    //   $("body").onClick


    $("body").on('click','.comment-reply-link', function(e){
        e.preventDefault();
        e.stopPropagation();
        

        parent_id = parseInt(this.getAttribute("data-parent-id"),10 );
        post_id = this.getAttribute("data-post-id");

        $("#reply-box-"+parent_id+"").remove();


        $(this).after(
            "<form class='reply-form' id='reply-box-"+parent_id+"'> <div class='form-group comment-box'> <input type='hidden' name='post_id' value="+post_id+"> <input type='hidden' name='parent_id' value="+parent_id+">  <input type='text' class='form-control' name='content' placeholder='reply...'> <button type='submit' class='btn btn-primary reply-submit-button margin_for_button' >reply</button> </div></form>"
         );

        // $("#reply-link-"+parent_id+"").remove();

        $.ajax({
            method: "GET",
            url: "comments/fetch_replies",
            data: {post_id: post_id ,parent_id: parent_id}
        }
        ).done(function(data){
            console.log("all ready present replies...")
            console.log(data);
            if(data.length){

                (data).forEach(function(reply){
                    $("#reply-box-"+parent_id+"").append(
                        "<div class='comment-parent'><div class='card-body'>"+reply.content+"</div> <div class='card-footer'> <a href='' id = 'reply-link-"+reply.id+"' class='comment-reply-link' data-post-id="+post_id+" data-parent-id="+ reply.id +"> reply</a> </div> </div>"
                    )
                });
                
            }
        }
        )

        

        // $(this).click(function() {

        // // console.log("clicked on reply");

        // return false;

        // }
        // )



    }
    )

    // $("body").on('click','.reply-form',function(e){
    //     e.stopPropagation()
    //     e.preventDefault();
       
    // });


    $("body").on('submit','.reply-form',function(e){
         e.preventDefault();
         e.stopPropagation();
        
        console.log("here in reply submit button");
        debugger
        // parent_id = this.getAttribute("data-parent-id");
        // post_id = this.getAttribute("data-post-id");  
        data = $(this).serialize();

        content=$(this.elements["content"]).val();
        parent_id=$(this.elements["parent_id"]).val();

        $.ajax({
            method: "POST",
            url: "/comments/create_replies",
            data: data,
        }
        ).done(function(data){
            console.log("in function")
            $("#reply-box-"+parent_id+"").append(
                "<div class='comment-parent'><div class='card-body'>"+content+"</div> <div class='card-footer'> <a href='' id = 'reply-link-"+data+"' class='comment-reply-link' data-post-id="+post_id+" data-parent-id="+ data +"> reply</a> </div> </div>"
            )
            // $("#reply-box-"+parent_id+"").remove();
        }
        )
    }

        // $(this).submit(function() {
        //   return false;
        // }
    )


  })














// function commentajax(event){
//     event.preventDefault();
//     console.log("commentAjax");

//     $.ajafunction commentajax(event){
//     event.preventDefault();
//     console.log("commentAjax");

//     $.ajax

// }x

// }
