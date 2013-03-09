class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :title
      t.integer :kol_pop
      t.integer :time
      t.boolean :active
      t.integer :author_id

    end
  end
end
