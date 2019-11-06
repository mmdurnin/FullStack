@restaurants.each do |restaurant|
    json.set! restaurant.id do :name, :city_id, :neighborhood, :pricing
    end
end

