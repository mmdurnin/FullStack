class Restaurant < ApplicationRecord
    validates :name, :city_id, :pricing, presence: true
    validates :pricing, { greater_than: 0, less_than_or_equal_to: 5 }

    belongs_to :city,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: 'City'
end
