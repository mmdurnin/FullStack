@reviews.each do |review|
    json.set! review.id do
        json.username review.user.name
        json.created_at review.created_at.strftime("%B %d, %Y")
        json.restaurant_id @restaurant.id
        json.rating review.rating
        json.body review.body
    end
end