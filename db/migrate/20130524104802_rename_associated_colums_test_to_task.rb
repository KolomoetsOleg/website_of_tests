class RenameAssociatedColumsTestToTask < ActiveRecord::Migration
  def up
  	rename_column :best_answers, :test_id, :task_id
  	rename_column :quests, :test_id, :task_id
  end

  def down
  	rename_column :best_answers, :task_id, :test_id
  	rename_column :quests, :task_id, :test_id
  end
end
