class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, presence: true
    validate :existing_reservation
    validate :valid_date
    validate :enter_num_guests

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: 'Restaurant'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'


    def existing_reservation
        existing_reservation = Reservation
            .where.not(id: self.id)
            .where(user_id: user_id) #existing reservations made by this user
            .where(restaurant_id: restaurant_id) # " " " for this restaurant
            .where(starts_at: starts_at).count # " " " for this time slot

            return if existing_reservation == 0 # if the query returns 0 results, allow user to create reservation
            self.errors[:base] << 'It looks like you have already reserved for this time' # otherwise, return error
    end

    def enter_num_guests
        return if !(num_guests == nil)
        self.errors[:base] << 'Please provide your party size.'
    end

    def valid_date
        if starts_at == nil
            self.errors[:base] << 'When will you be dining?'
            return
        end

        return if starts_at > Date.today
        
        self.errors[:base] << 'Please select a future reservation date!'
    end

end
