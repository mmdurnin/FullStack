import { connect } from 'react-redux';
import Home from './home';
import { fetchCities } from '../../actions/city_actions';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';

const msp = (state) => ({
    restaurants: Object.values(state.entities.restaurants),
    cities: Object.values(state.entities.cities),
    currentCity: state.currentCity

})

const mdp = dispatch => ({
    fetchCities: () => dispatch(fetchCities()),
    fetchRestaurants: (cityId) => dispatch(fetchRestaurants(cityId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))    
})

export default connect(msp, mdp)(Home)