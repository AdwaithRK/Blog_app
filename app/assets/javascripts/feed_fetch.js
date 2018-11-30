$(document).on('turbolinks:load',function(){


 $('textarea').froalaEditor({
    heightMin: 300,
    heightMax: 300
    }) 

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
     history.pushState({},"",new_URL);
    $.ajax({
        method: "GET",
        url: url
      }).done(function(data){
        (data.feed).forEach(function(obj){
            console.log(obj);
            var img = $('<img class="pro-pic">');
            if(obj.image_url){
                img.attr('src',obj.image_url);
            }
            else{           
                img.attr('src',"assets/image.jpg");               
            }

            if (obj.liked) {
                liked = "<i class='fa fa-thumbs-o-down' style='font-size:24px'></i>"
                liked_button = "<button type='button' data-user-id="+obj.user_id+" data-post-id="+obj.post_id+" data-likeable-type='Post' class='btn btn-light btn-lg feed-button unlike-button'>"+liked+"</button><button type='button' class='btn btn-light btn-lg feed-button comment-button' data-post-id="+obj.post_id+" data-user-id="+obj.user_id+"><i class='fa fa-comment-o' style='font-size:24px'></i></button>"
            }
            else{
                liked = "<i class='fa fa-thumbs-o-up' style='font-size:24px'></i>"
                liked_button = "<button type='button' data-user-id="+obj.user_id+" data-post-id="+obj.post_id+" data-likeable-type='Post' class='btn btn-light btn-lg feed-button like-button'>"+liked+"</button><button type='button' class='btn btn-light btn-lg feed-button comment-button' data-post-id="+obj.post_id+" data-user-id="+obj.user_id+"><i class='fa fa-comment-o' style='font-size:24px'></i></button>"
            }

            var feedIndividual=$("<div class='feed-individual'>");
            var feedHeader=$("<div class='feed-header'>");
            var feedBody=$("<div class='feed-body'>");
            var feedFooter=$("<div class='feed-footer'>");
            $(feedFooter).append(liked_button);
            $(feedHeader).append(img)
            $(feedHeader).append("<a href='profiles/"+obj.user_id+"' ><span class='feed-name'>"+obj.user_name+"</span></a>");
            $(feedBody).append("<div class='feed-title'>"+obj.title+"</div>");
            $(feedBody).append("<div class='feed-content'>"+obj.content+"</div>");
            $(feedIndividual).append(feedHeader);
            $(feedIndividual).append(feedBody);
            $(feedIndividual).append(feedFooter);
            $(feedFooter).prepend("<div class='stats-div col-sm-12'>  <span class='col-sm-6 w-100 float-left'>  <span >likes </span><span class='likes-count-"+obj.post_id+"'>"+obj.likes_count+"</span>  </span>    <span class='col-sm-6 w-100 float-right'>  <span>comments </span><span class='comment-count-'"+obj.post_id+"'>"+obj.comments_count+"</span> </span> </div>");
            $('.feed-div').append(feedIndividual);
        }
        )
      }
      )


  })

}

)
