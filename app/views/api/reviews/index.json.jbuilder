@reviews.each do |review|
    json.set! review.id do
        json.username review.user.name
        json.restaurant_id @restaurant.id
        json.rating review.rating
        json.body review.body
        json.created_at review.created_at.strftime("%B/%d/%Y")
    end
end