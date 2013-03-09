class CreateQuests < ActiveRecord::Migration
  def change
    create_table :quests do |t|
      t.string :title
      t.integer :tip_vop
      t.integer :test_id

    end
  end
end