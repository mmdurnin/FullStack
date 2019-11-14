class Restaurant < ApplicationRecord
    validates :name, :city_id, :pricing, presence: true
    validates :pricing, numericality: { greater_than: 0, less_than_or_equal_to: 5 }

    belongs_to :city,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: 'City'

    has_many :reservations,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: 'Reservation',
        dependent: :destroy

    has_many :reviews,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: 'Review'

    has_one_attached :image
end
