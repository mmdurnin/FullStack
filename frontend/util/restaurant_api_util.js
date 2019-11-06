export const fetchRestaurant = (restuarantId) => {
    return $.ajax({
        url: `/api/restaurants/${restuarantId}`,
        method: 'GET'
    })
}

export const fetchRestaurants = (cityId) => {
    return $.ajax({
        url: `/api/restaurants?city_id=${cityId}`,
        method: 'GET'
    })
}