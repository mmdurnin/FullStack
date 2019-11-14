import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const msp = (state, ownProps) => {

    let values = queryString.parse(ownProps.location.search)
    
    return {
        cityId: values.city_id,
        time: values.time,
        date: values.date,
        guests: values.guests,
        restaurantName: values.restaurant,
        restaurants: Object.values(state.entities.restaurants),
    }
}

const mdp = dispatch => ({
    fetchRestaurants: (cityId, restaurantName) => dispatch(fetchRestaurants(cityId, restaurantName))
})



export default connect(msp, mdp)(RestaurantIndex);