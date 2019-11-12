@reservations.each do |reservation|
    json.set! reservation.id do 
        json.partial! '/api/reservations/reservation', reservation: reservation
        json.starts_at reservation.starts_at
        json.restaurant_name reservation.restaurant.name
        json.restaurant_phone reservation.restaurant.phone_number
    end
end