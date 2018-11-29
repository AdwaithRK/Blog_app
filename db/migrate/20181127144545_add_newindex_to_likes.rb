class AddNewindexToLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, column: [:likeable_type, :likeable_id]
  end
end
