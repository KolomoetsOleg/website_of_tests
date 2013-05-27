class RenameRezOnHeroku < ActiveRecord::Migration
  def up
  	rename_column :rezults, :test_id, :task_id
  end

  def down
  	rename_column :rezults, :task_id, :test_id
  end
end
