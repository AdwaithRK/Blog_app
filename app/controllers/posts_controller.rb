class PostsController < ApplicationController

    def create

    end

    def save_article
      p 'helloooo'
      p params
      render "<h1>save article</h1>"
    end

end
