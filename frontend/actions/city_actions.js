import * as CityAPIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = 'RECEIVE_CITIES';


const receiveCities = (cities) => ({
    type: RECEIVE_CITIES,
    cities: cities
})

export const fetchCities = () => dispatch => {
    return CityAPIUtil.fetchCities()
        .then((cities) => dispatch(receiveCities(cities)))
}