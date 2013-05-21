class CreateTableBestAnswer < ActiveRecord::Migration
  def change
    create_table :best_answers do |t|
      t.integer :test_id
      t.integer :user_id
      t.integer :quest_id
      t.string  :answer
      t.boolean :bool_answer
    end
  end
end
