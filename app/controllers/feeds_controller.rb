class FeedsController < ApplicationController

  def public
    p "in public"
    @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user);
    p @posts
  end

  def personal
    p "in personal"
    @personal_feed = current_user.posts;
    render json: @personal_feed
  end

  def following
    p "in following"
  end
end