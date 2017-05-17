class CreatePlanes < ActiveRecord::Migration[5.0]
  def change
    create_table :planes do |t|
      t.integer :name
      t.integer :row
      t.text :col

      t.timestamps
    end
  end
end
