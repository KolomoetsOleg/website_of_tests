class CreateRezults < ActiveRecord::Migration
  def change
    create_table :rezults do |t|
      t.integer :user_id 
      t.integer :test_id 
      t.integer :attempt 
      t.integer :bal     

      t.timestamps
    end
  end
end
