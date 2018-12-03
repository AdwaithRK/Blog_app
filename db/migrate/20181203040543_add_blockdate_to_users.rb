class AddBlockdateToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :blockdate, :date, :null => false, default: -> { 'CURRENT_TIMESTAMP' }
  end
end
