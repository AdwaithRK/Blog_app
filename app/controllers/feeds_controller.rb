class FeedsController < ApplicationController

  def public
    @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user)
    render 'feed'
  end

  def personal
    @posts = current_user.posts
    render 'feed'
  end

  def following
    @posts = Post.where(user_id: current_user.following_ids)
    render 'feed'
  end

end