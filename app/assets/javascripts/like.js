$(document).on('turbolinks:load',function(){

    $("body").on('click','.like-button',function(){
        
        console.log("liked")
        post_id = this.getAttribute("data-post-id");
        user_id = this.getAttribute("data-user-id");
        likeable_type = this.getAttribute("data-likeable-type");

        like_count = document.getElementsByClassName("likes-count-"+post_id+"");
        console.log(like_count);
        count = parseInt(like_count[0].innerText)
        like_count[0].innerHTML = ++count; 

        $.ajax({
            method: "POST",
            url: "/likes/create",
            data: { post_id: post_id, user_id: user_id, likeable_type: likeable_type }
          })
          .done(function(data){
             console.log(data);
          }
          )

        $(this).replaceWith(
            "<button type='button' data-likeable-type='Post'  data-post-id = "+post_id+"  data-user-id = "+user_id+" class='btn btn-light btn-lg feed-button unlike-button'> <i class='fa fa-thumbs-o-down' style='font-size:24px'></i></button>"
        )
        

    }
    )


    $("body").on('click','.unlike-button',function(){
        
        console.log("unliked")
        post_id = this.getAttribute("data-post-id");
        user_id = this.getAttribute("data-user-id");
        likeable_type = this.getAttribute("data-likeable-type");

        like_count = document.getElementsByClassName("likes-count-"+post_id+"");
        console.log(like_count);
        count = parseInt(like_count[0].innerText)
        like_count[0].innerHTML = --count; 



        $.ajax({
            method: "DELETE",
            url: "/likes/delete",
            data: { post_id: post_id, user_id: user_id, likeable_type: likeable_type }
          })
          .done(function(data){
             console.log(data);
          }
          )



        $(this).replaceWith(
            "<button type='button' data-likeable-type='Post' data-post-id = "+post_id+" data-user-id = "+user_id+" class='btn btn-light btn-lg feed-button like-button'> <i class='fa fa-thumbs-o-up' style='font-size:24px'></i></button>"
        )
    }
    )


}
)