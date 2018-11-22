json.feed @posts.each do |post|
    json.title post.title
    json.content post.content
    json.user_name post.user.name
    json.user_id post.user.id
    json.post_id post.id
    if post.user.avatar.attached?
      json.image_url url_for(post.user.avatar)
    end

    p "in json builder"
end
