class RenameTestToTask < ActiveRecord::Migration
  def up
  	rename_table :tests, :tasks
  end

  def down
  	rename_table :tasks, :tests
  end
end
