$(document).on('turbolinks:load',function(){

    $("body").on('click','.follow-button',function(){

        user_id =  this.getAttribute("data-user-id");


        $.ajax({
            method: "POST",
            url: "/logged_in/follow",
            data: { user_id: user_id }
          })
          .done(function(data){
             console.log(data);
          }
          )

          var follower_count = document.getElementsByClassName("follower-count");
          console.log(follower_count[0])
          count = parseInt(follower_count[0].innerText);
          follower_count[0].innerHTML = ++count;
          console.log("here the count is "+count )

        $(this).replaceWith(
            "<button type='button' class='btn btn-secondary unfollow-button' data-user-id="+user_id+">Unfollow</button>"
        )
    })


    $("body").on('click','.unfollow-button',function(){
        user_id =  this.getAttribute("data-user-id"); 

        console.log("in unfollow");
        
        $.ajax({
            method: "DELETE",
            url: "/logged_in/unfollow",
            data: { user_id: user_id }
          })
          .done(function(data){
             console.log(data);
          }
          )

          var follower_count = document.getElementsByClassName("follower-count");
          console.log(follower_count[0])
          count = parseInt(follower_count[0].innerText);
          follower_count[0].innerHTML = --count;
          console.log("here the count is "+count )
    
        $(this).replaceWith(
            "<button type='button' class='btn btn-primary follow-button' data-user-id="+user_id+">follow</button> "
        )
    })

}
)