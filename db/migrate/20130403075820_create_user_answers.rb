class CreateUserAnswers < ActiveRecord::Migration
  def change
    create_table :user_answers do |t|
      t.integer :user_id
      t.integer :quest_id
      t.string 	:answer
      t.boolean 	:status, :default => false
    end
  end
end
