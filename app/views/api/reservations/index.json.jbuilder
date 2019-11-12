@reservations.each do |reservation|
    json.set! reservation.id do 
        json.partial! '/api/reservations/reservation', reservation: reservation
        json.starts_at_date reservation.starts_at.strftime("%B/%d/%Y")
        json.starts_at_time reservation.starts_at.strftime("%I:%M %p") 
        json.restaurant_image url_for(reservation.restaurant.image)
        json.restaurant_name reservation.restaurant.name
        json.restaurant_address reservation.restaurant.address
        json.restaurant_neighborhood reservation.restaurant.neighborhood
        json.restaurant_phone reservation.restaurant.phone_number
    end
end