class AddColToPlane < ActiveRecord::Migration[5.0]
  def change
    add_column :planes, :col, :integer
  end
end
