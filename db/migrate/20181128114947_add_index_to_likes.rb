class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes,[:likeable_type, :likeable_id, :user_id], unique: true, name: 'like_index'
  end
end
