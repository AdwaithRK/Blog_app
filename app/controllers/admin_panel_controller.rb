class AdminPanelController < ApplicationController
    def view

    end

    def list_users
        @users = User.all
        p 'helloo in list users'
    end

    def list_posts
        @posts = Post.all
        p 'list all posts'
    end

end
