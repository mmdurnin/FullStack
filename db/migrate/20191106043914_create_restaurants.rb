class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :summary
      t.string :hours
      t.string :dress_code
      t.string :address
      t.string :neighborhood
      t.string :phone_number
      t.string :website
      t.integer :city_id, null: false
      t.integer :pricing, null: false

      t.timestamps
    end
    add_index :restaurants, :name
    add_index :restaurants, :city_id
    add_index :restaurants, :pricing
  end
end
