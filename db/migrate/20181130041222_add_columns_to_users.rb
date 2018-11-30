class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :isadmin, :boolean, default: false
    add_column :users, :blockdate, :date, default: -> { 'CURRENT_TIMESTAMP' }
  end
end
