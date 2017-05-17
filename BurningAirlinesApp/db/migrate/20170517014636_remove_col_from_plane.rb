class RemoveColFromPlane < ActiveRecord::Migration[5.0]
  def change
    remove_column :planes, :col, :text
  end
end
