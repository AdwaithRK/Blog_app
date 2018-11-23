$(document).on('turbolinks:load',function(){

 $(".nav-link").click(function(e) { 
    e.preventDefault();
    console.log("hello");
    $(".nav-link").removeClass('active')
    $(this).addClass('active')
    text=$(this).text()
    text=text.toLowerCase();
    url="/feeds/"+text;
    console.log(url);
    $('.feed-div').empty().show();

    var now = window.location.href;
    now = now.split("?")[0];
    console.log("now we are in"+now)
    queryString = "feed="+text;

    new_URL = now + '?' + queryString;

    // window.history.replaceState( {} ,title, new_URL );
     history.pushState({},"",new_URL);
    $.ajax({
        method: "GET",
        url: url
      }).done(function(data){
         console.log(data.feed);
         console.log("we got feed");
        
        //  for(let obj of data){
        //     var img = $('<img class="pro-pic">');
        //     if(obj.image_url){
        //       console.log("bow bow");
        //     }
        //     else{
        //       console.log("meow meow")
        //     }
             
        //  }
        (data.feed).forEach(function(obj){
            console.log(obj);
            var img = $('<img class="pro-pic">');
            if(obj.image_url){
                // img.attr('src',"<%= image_tag("+obj.image_url+") %>");
                img.attr('src',obj.image_url);
            }
            else{
                // img.attr('src',"<%= asset_path('image.jpg') %>");               
                img.attr('src',"assets/image.jpg");               
            }

            // img.appendTo('.feed-div');
            var feedIndividual=$("<div class='feed-individual'>");
            // $(header).append(img);
            var feedHeader=$("<div class='feed-header'>");
            var feedBody=$("<div class='feed-body'>");
            var feedFooter=$("<div class='feed-footer'>");
            $(feedFooter).append("<button type='button' class='btn btn-light btn-lg feed-button like-button'><i class='fa fa-thumbs-o-up' style='font-size:24px'></i></button><button type='button' class='btn btn-light btn-lg feed-button comment-button' data-post-id="+obj.post_id+" data-user-id="+obj.user_id+"><i class='fa fa-comment-o' style='font-size:24px'></i></button>");
            $(feedHeader).append(img)
            $(feedHeader).append("<a href='profiles/"+obj.user_id+"' ><span class='feed-name'>"+obj.user_name+"</span></a>");
            $(feedBody).append("<div class='feed-title'>"+obj.title+"</div>");
            $(feedBody).append("<div class='feed-content'>"+obj.content+"</div>");
            $(feedIndividual).append(feedHeader);
            $(feedIndividual).append(feedBody);
            $(feedIndividual).append(feedFooter);
            $('.feed-div').append(feedIndividual);
        }
        )
      }
      )


  })
  
  
    // $(".comment-button").on('click',function(){
    //     console.log("comment")
    //     $(this).after(
    //         "<form><div class='form-group'><input type='text' class='form-control' placeholder='comment...'> <button type='submit' class='btn btn-primary'>comment</button> </div></form>"
    //     )
    // }
    // )

    $("body").on('click','.comment-button',function(){
        $(this).next().remove();
        $('.comment-form').remove();
        console.log(this.getAttribute("data-user-id"));
        console.log(this.getAttribute("data-post-id"));       
        console.log("comment")
        $(this).after(
            "<form class='comment-form'><div class='form-group comment-box'><input type='text' class='form-control' placeholder='comment...'> <button type='submit' class='btn btn-primary margin_for_button'>comment</button> </div></form>"
        )
    })

    $("body").on('click',".like-button",function(){
        console.log("like");
    }
    )


}

)
