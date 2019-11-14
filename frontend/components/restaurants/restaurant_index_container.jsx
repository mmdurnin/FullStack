import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchCities } from '../../actions/city_actions';

const msp = (state, ownProps) => {

    console.log("own props")
    console.log(ownProps)
    console.log("state.entities.cities")
    console.log(state.entities.cities)
    let values = queryString.parse(ownProps.location.search)
    
    return {
        cities: Object.values(state.entities.cities),
        cityId: values.city_id,
        time: values.time,
        date: values.date,
        guests: values.guests,
        restaurantName: values.restaurant,
        restaurants: Object.values(state.entities.restaurants),
    }
}

const mdp = dispatch => ({
    fetchRestaurants: (cityId, restaurantName) => dispatch(fetchRestaurants(cityId, restaurantName)),
    fetchCities: () => dispatch(fetchCities())
})



export default connect(msp, mdp)(RestaurantIndex);