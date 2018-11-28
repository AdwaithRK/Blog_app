class FeedsController < ApplicationController

  def public
    p "in public"
    @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user)
    render 'feed'
  end

  def personal
    p "in personal"
    @posts = current_user.posts
    render 'feed'
  end

  def following
    p "in following"
  end
end