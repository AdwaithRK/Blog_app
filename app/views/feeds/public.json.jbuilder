@posts.each do |post|
    json.title @post.title;
    json.content @post.content
    json.user_name @post.user.name
    json.image_url url_for(@post.user.avatar)
end
