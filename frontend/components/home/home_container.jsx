import { connect } from 'react-redux';
import Home from './home';
import { fetchCities } from '../../actions/city_actions';
import { fetchRestaurant, fetchFeaturedRestaurants } from '../../actions/restaurant_actions';

const msp = (state) => ({
    featuredRestaurants: Object.values(state.entities.restaurants),
    cities: Object.values(state.entities.cities)
})

const mdp = dispatch => ({
    fetchCities: () => dispatch(fetchCities()),
    fetchFeaturedRestaurants: () => dispatch(fetchFeaturedRestaurants()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))    
})

export default connect(msp, mdp)(Home)