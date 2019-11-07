import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const msp = (state, ownProps) => {

    const values = queryString.parse(ownProps.location.search)
    return {
        cityId: values.city_id,
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mdp = dispatch => ({
    fetchRestaurants: (cityId) => dispatch(fetchRestaurants(cityId))
})



export default connect(msp, mdp)(RestaurantIndex);