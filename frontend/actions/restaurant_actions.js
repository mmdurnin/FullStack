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

export const fetchRestaurant = (restaurant) => dispatch => {
    return RestaurantAPIUtil.fetchRestaurant(restaurant)
        .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
}

export const fetchRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchRestaurants()
        .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
}