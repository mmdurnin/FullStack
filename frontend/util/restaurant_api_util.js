export const fetchRestaurant = (restuarantId) => {
    return $.ajax({
        url: `/api/restaurants/${restuarantId}`,
        method: 'GET'
    })
}

export const fetchRestaurants = (cityId, restaurantName) => {
    return $.ajax({
        url: `/api/restaurants?city_id=${cityId}&restaurant_name=${restaurantName}`,
        method: 'GET'
    })
}

export const fetchFeaturedRestaurants = () => {
    return $.ajax({
        url: `/api/restaurants/featured`,
        method: 'GET'
    })
}