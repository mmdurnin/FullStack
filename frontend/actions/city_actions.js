import * as CityAPIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const CURRENT_CITY = 'CURRENT_CITY';

const receiveCities = (cities) => ({
    type: RECEIVE_CITIES,
    cities: cities
})

export const currentCity = (city) => ({
    type: CURRENT_CITY,
    city
})

export const fetchCities = () => dispatch => {
    return CityAPIUtil.fetchCities()
        .then((cities) => dispatch(receiveCities(cities)))
}