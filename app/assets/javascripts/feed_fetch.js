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
            $(feedFooter).append("<button type='button' class='btn btn-primary btn-lg feed-button'>like</button><button type='button' class='btn btn-secondary btn-lg feed-button'>comment</button>");
            $(feedHeader).append(img)
            $(feedHeader).append("<span class='feed-name'>"+obj.user_name+"</span>");
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


}

)
