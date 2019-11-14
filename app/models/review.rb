class Review < ApplicationRecord
    validates :restaurant_id, presence: true
    validates :user_id, presence: true
    validates :rating, numericality: { greater_than: 0, less_than_or_equal_to: 5 }
    validates_presence_of :rating, message: 'Rate your dining experience before submitting!'
    validates_presence_of :body, message: 'What did you think of the restaurant?'

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: 'Restaurant'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
