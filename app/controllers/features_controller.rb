class FeaturesController < ApplicationController
  def search_user
    search_text = params[:search_text]
    @users = search_text.present? ? User.select('id', 'name').where('name LIKE ?', "%#{search_text}%").where.not(['name= ?', current_user.name]) : []
    render json: @users
  end


  def edit_pro_pic
    

  end


  def save_new_pro_pic

    unless params[:avatar].blank?
      # p "parameters are#{params[:avatar]}"
      current_user.avatar.purge_later
      current_user.avatar.attach(params[:avatar])
      # p 'hello from save_new_pro_pic'
    end
    redirect_to features_edit_pro_pic_path
  end

  # def welcome_msg
  #   render 
  # end
end
