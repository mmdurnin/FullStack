import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const fetchRestaurant = (restaurantId) => dispatch => {
    return RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
}

export const fetchRestaurants = (cityId, restaurantName = "") => dispatch => {

    return RestaurantAPIUtil.fetchRestaurants(cityId, restaurantName)
        .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
}

export const fetchFeaturedRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchFeaturedRestaurants()
        .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
}