json.comments @comments.each do |comment|
    json.content comment.content
    json.id comment.id
    # json.user_id post.user.id
    # json.post_id post.id
    # if post.user.avatar.attached?
    #   json.image_url url_for(post.user.avatar)
    # end
end