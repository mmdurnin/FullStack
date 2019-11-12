import UsersReducer from './users_reducer';
import RestaurantsReducer from './restaurants_reducer';
import CitiesReducer from './cities_reducer';
import ReservationsReducer from './reservations_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    restaurants: RestaurantsReducer,
    cities: CitiesReducer,
    reservations: ReservationsReducer
})

export default EntitiesReducer;