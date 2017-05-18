class AddRowToFlight < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :col, :integer
  end
end
