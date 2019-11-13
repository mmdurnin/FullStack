json.set! @reservation.id do 
    json.partial! '/api/reservations/reservation', reservation: @reservation
    json.reservation_date @reservation_date
    json.reservation_time @reservation_time
    json.prefill_date @reservation.starts_at.strftime("%Y-%m-%d")
    json.starts_at_date @reservation.starts_at.strftime("%B/%d/%Y")
    json.starts_at_time @reservation.starts_at.strftime("%I:%M %p") 
    json.restaurant_name @reservation.restaurant.name
    json.restaurant_image url_for(@reservation.restaurant.image)
    json.restaurant_phone @reservation.restaurant.phone_number
    json.restaurant_address @reservation.restaurant.address
end