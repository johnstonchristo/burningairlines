class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.text :origin
      t.text :destination
      t.integer :plane_id
      t.datetime :date
      t.integer :remaining_seats

      t.timestamps
    end
  end
end
