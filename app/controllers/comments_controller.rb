class CommentsController < ApplicationController

    def create
      p "in comments create"
      @comment=Comment.new(comment_params);
      p @comment
      p current_user
      @comment.user_id=current_user.id;

      # if @comment.save
      #   redirect_to current_user
      # end

      respond_to do |format|
        format.json { head :ok }
      end
  
    end









    private
    # Using a private method to encapsulate the permissible parameters is
    # a good pattern since you'll be able to reuse the same permit
    # list between create and update. Also, you can specialize this method
    # with per-user checking of permissible attributes.
    def comment_params
      params.permit(:post_id, :content);
    end


end
