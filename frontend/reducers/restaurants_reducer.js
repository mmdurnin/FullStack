import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const RestaurantsReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case (RECEIVE_RESTAURANT):
            return Object.assign({}, state, action.restaurant);
        case (RECEIVE_RESTAURANTS):
            return Object.assign({}, action.restaurants);
        default:
            return state;
    }
}

export default RestaurantsReducer;