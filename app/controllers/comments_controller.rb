# comments controller
class CommentsController < ApplicationController
    def create
      p 'in comments create'
      @comment = Comment.new(comment_params)
      p @comment
      p current_user
      @comment.user_id = current_user.id
      if @comment.save
        msg = { status: 'success', message: 'You do not have enough money!' }
        respond_to do |format|
          format.json { render json: msg }
        end
      end
    end

    def fetch_comment
      @post = Post.find(params[:post_id])
      p "you are in fetch"
      @comments = @post.comments.where("parent_id IS ?",nil)
    end

    private
    def comment_params
      params.permit(:post_id, :content);
    end

end
