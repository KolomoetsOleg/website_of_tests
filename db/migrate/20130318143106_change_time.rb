class ChangeTime < ActiveRecord::Migration
  def up
    change_column :tests, :time, :time
  end

  def down
    change_column :tests, :time, :int
  end
end
