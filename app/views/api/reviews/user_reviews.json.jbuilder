@reviews.each do |review|
    json.set! review.id do 
        json.created_at_date review.created_at.strftime("%B/%d/%Y")
        json.created_at_time review.created_at.strftime("%I:%M %p") 
        json.rating review.rating
        json.body review.body
        json.restaurant_id review.restaurant.id
        json.restaurant_image url_for(review.restaurant.image)
        json.restaurant_name review.restaurant.name
        json.restaurant_neighborhood review.restaurant.neighborhood
    end
end