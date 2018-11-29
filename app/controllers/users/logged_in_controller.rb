class Users::LoggedInController < ApplicationController
  def index
    @name = current_user.name
    @feedtype = params[:feed]
    p params[:feed]
    if(@feedtype == 'public')
      @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user)
    elsif(@feedtype == 'personal') 
      @posts = current_user.posts
    else
      @following = current_user.following
      p @following
      @posts = ""
      unless @following.empty?
        @following.each do |follower|
          if @posts = ""
            @posts = follower.posts
          else
            @posts +=follower.posts
          end
        end
        p @posts
      end
    end
  end

  def follow
    other_user = User.find(params[:user_id])
    current_user.following << other_user
  end

  # Unfollows a user.
  def unfollow
    other_user = User.find(params[:user_id])
    current_user.following.delete(other_user)
  end

  # Returns true if the current user is following the other user.
  def following?(other_user)
    current_user.following.include?(other_user)
  end

end
