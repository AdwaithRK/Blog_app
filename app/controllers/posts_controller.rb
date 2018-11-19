class PostsController < ApplicationController

    def new
     @post = Post.new
    end

    def create
      p 'helloooo'
      p params
      @post = current_user.posts.new(create_params)
      @post.save
    end


    private
    # Using a private method to encapsulate the permissible parameters is
    # a good pattern since you'll be able to reuse the same permit
    # list between create and update. Also, you can specialize this method
    # with per-user checking of permissible attributes.
    def create_params
      params.permit(:title, :content, :privacy, :status)
    end

end
