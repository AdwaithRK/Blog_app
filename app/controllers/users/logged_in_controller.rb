class Users::LoggedInController < ApplicationController
    def index
      @name = current_user.name
      @feedtype = params[:feed]
      p params[:feed]
      if(@feedtype == 'public')
        @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user);
      else 
        @posts = current_user.posts
      end

    end
end
