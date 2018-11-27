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

    def create_replies
      @reply = Comment.new(comment_params)
      @reply.user_id = current_user.id
      p 'in create replies'
      p params
    end

    def fetch_replies
      @replies = Post.find(params[:post_id]).comments.where("parent_id = ?",params[:parent_id])
      render json: @replies
    end

    private
    def comment_params
      params.permit(:post_id, :content, :parent_id)
    end

end
