import React from 'react';
import SearchForm from './search_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchRestaurant, fetchRestaurants } from '../../../actions/restaurant_actions';
import { fetchCities } from '../../../actions/city_actions';

const msp = (state) => {
    console.log("state.entities.cities")
    console.log(state.entities.cities)
    return {
    restaurants: Object.values(state.entities.restaurants),
    cities: Object.values(state.entities.cities)
}}


const mdp = dispatch => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchCities: () => dispatch(fetchCities())
})

export default withRouter(connect(msp, mdp)(SearchForm));