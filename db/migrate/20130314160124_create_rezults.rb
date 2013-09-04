class CreateRezults < ActiveRecord::Migration
  def change
    create_table :rezults do |t|
      t.integer :user_id 
      t.integer :task_id 
      t.integer :attempt, :default => 0 
      t.integer :bal, :default => 0     

      t.timestamps
    end
  end
end
