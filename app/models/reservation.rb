class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, presence: true
    validates :starts_at, presence: {message: "When will you be dining?"}
    validate :existing_res
    validate :future_date
    validate :enter_num_guests

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
            .where.not(id: self.id) #this line is pointless I think
            .where(user_id: user_id) #existing reservations with the same user, restaurant, and start time
            .where(restaurant_id: restaurant_id)
            .where(starts_at: starts_at).count
            
            p "#{existing_res}"
            p errors
            p self.errors
            return if existing_res == 0
            self.errors[:base] << 'It looks like you have already reserved for this time'
    end

    def future_date
        return if starts_at > Date.today
        self.errors[:base] << 'Please select a future reservation date!'
    end

    def enter_num_guests
        return if !(num_guests == nil)
        self.errors[:base] << 'Please provide your party size.'
    end

end
