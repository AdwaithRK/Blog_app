# comments controller
class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      respond_to do |format|
        format.json { render json: @comment.id }
      end
    end
  end

  def fetch_comment
    @post = Post.find(params[:post_id])
    @comments = @post.comments.where("parent_id IS ?",nil)
  end

  def create_replies
    @reply = Comment.new(comment_params)
    @reply.user_id = current_user.id
    if @reply.save
      p "in replies create"
      p "the id is #{@reply.id}"
      respond_to do |format|
        format.json { render json: @reply.id }
      end
    end
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
