class AdminpanelController < ApplicationController

    def view
      @users = User.all
    end

end
