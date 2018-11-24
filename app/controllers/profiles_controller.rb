class ProfilesController < ApplicationController
    
    def show
        @user_details=User.find(params[:id])

        @user_posts=@user_details.posts.where(privacy: "Publicly", status: "Publish")

    end
end
