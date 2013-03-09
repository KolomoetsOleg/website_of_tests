class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :answer
      t.boolean :status
      t.integer :quest_id
    end
  end
end
