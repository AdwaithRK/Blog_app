class LikesController < ApplicationController
  
  def create
    p 'here in create'
    @like = Like.new
    @like.likeable_type = params[:likeable_type]
    @like.likeable_id = params[:post_id]
    @like.user_id = current_user.id
    p "like is #{@like}"
    if @like.save
      p "save in like"
      msg = { status: 'success', message: 'You do not have enough money!' }
      respond_to do |format|
        format.json { render json: msg }
      end
    end
  end

  def delete
    like = Like.find_by(likeable_id: params[:post_id], likeable_type: params[:likeable_type], user_id: current_user.id)
    like.destroy
  end


  private

  def create_params
    params.permit(:post_id, :likeable_type)
  end

end
