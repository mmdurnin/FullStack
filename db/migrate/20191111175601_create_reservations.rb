class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.datetime :starts_at, null: false
      t.integer :num_guests, null: false

      t.timestamps
    end

    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
    add_index :reservations, :starts_at
    add_index :reservations, [:restaurant_id, :user_id]
  end
end
