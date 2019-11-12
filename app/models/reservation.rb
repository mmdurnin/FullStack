class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, :starts_at, :num_guests, presence: true
    validate :existing_res

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: 'Restaurant'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'


    def existing_res
        existing_res = Reservation
            .where.not(id: self.id) #only looking for duplicates
            .where(user_id: user_id) #existing reservations with the same user, restaurant, and start time
            .where(restaurant_id: restaurant_id)
            .where(starts_at: starts_at).count

        p existing_res
        
        existing_res > 0 ? 'It looks like you have already reserved for this time' : return
    end

end
