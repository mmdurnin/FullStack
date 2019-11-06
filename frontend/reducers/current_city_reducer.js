import { CURRENT_CITY } from '../actions/city_actions';

const defaultCity = 1

const CurrentCityReducer = (state=defaultCity, action) => {
    switch(action.type){
        case(CURRENT_CITY):
            return action.city.id
        default:
            return defaultCity
    }
}

export default CurrentCityReducer;