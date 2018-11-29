json.feed @posts.each do |post|
    json.title post.title
    json.content post.content.try(:body).try(:html_safe)
    json.user_name post.user.name
    json.user_id post.user.id
    json.post_id post.id
    json.likes_count post.likes.count
    json.comments_count post.comments.count
    if post.user.avatar.attached?
      json.image_url url_for(post.user.avatar)
    end

    if Like.exists?(user_id: current_user.id, likeable_id: post.id, likeable_type: "Post")
      json.liked true
    else
      json.liked false
    end
end
