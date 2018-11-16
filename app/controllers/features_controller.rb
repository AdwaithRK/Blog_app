class FeaturesController < ApplicationController
  def search_user
    search_text = params[:search_text]
    @users = search_text.present? ? User.select('id', 'name').where('name LIKE ?', "%#{search_text}%").where.not(['name= ?', current_user.name]) : []
    render json: @users
  end


  def edit_pro_pic
    

  end

  # def welcome_msg
  #   render 
  # end
end
