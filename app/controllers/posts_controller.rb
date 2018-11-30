# posts class controller
class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(create_params)
    @post.save!
    redirect_to '/logged_in?feed=personal'
  end

  private
  def create_params
    params.permit(:title, :content, :privacy, :status)
  end
end
