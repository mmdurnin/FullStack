json.set! @reservation.id do 
    json.partial! '/api/reservations/reservation', reservation: @reservation
    json.reservation_date @reservation_date
    json.reservation_time @reservation_time
    json.restaurant_name @reservation.restaurant.name
    json.restaurant_phone @reservation.restaurant.phone_number
    json.restaurant_address @reservation.restaurant.address
end