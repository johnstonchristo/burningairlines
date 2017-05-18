class AddColToFlight < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :row, :integer
  end
end
