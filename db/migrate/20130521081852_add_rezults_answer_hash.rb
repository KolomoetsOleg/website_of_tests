class AddRezultsAnswerHash < ActiveRecord::Migration
  def up
  	add_column :rezults, :answer_hash, :text
  end

  def down
  	remove_column :rezults, :answer_hash
  end
end
