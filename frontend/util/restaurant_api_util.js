export const fetchRestaurant = (restuarantId) => ({
    url: `/api/restaurants/${restuarantId}`,
    method: 'GET'
})

export const fetchRestaurants = () => ({
    url: `/api/restaurants`,
    method: 'GET'
})