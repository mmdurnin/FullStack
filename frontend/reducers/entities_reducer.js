import UsersReducer from './users_reducer';
import RestaurantsReducer from './restaurants_reducer';
import CitiesReducer from './cities_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    restaurants: RestaurantsReducer,
    cities: CitiesReducer
})

export default EntitiesReducer;