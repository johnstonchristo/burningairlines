class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.datetime :date
      t.integer :flight_id
      t.integer :user_id
      t.integer :row
      t.text :col

      t.timestamps
    end
  end
end
