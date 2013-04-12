class AddQuestCost < ActiveRecord::Migration
  def change
    add_column :quests, :cost, :float
  end
end
