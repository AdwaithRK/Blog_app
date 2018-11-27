class Users::LoggedInController < ApplicationController
    def index
      @name = current_user.name
      @feedtype = params[:feed]
      p params[:feed]
      
      if(@feedtype == 'public')
        @posts = Post.where(privacy: "Publicly", status: "Publish").includes(:user);
      elsif(@feedtype == 'personal') 
        @posts = current_user.posts
      else
        @posts = nil;
      end

    end
end


