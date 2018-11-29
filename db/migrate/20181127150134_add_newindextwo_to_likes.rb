class AddNewindextwoToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, column: [:likeable_type, :likeable_id, :user_id], unique: true,  name: 'like index'
  end
end
