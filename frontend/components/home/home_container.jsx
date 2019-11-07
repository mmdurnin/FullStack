import { connect } from 'react-redux';
import Home from './home';
import { fetchCities } from '../../actions/city_actions';
import { fetchRestaurant, fetchFeaturedRestaurants } from '../../actions/restaurant_actions';

const msp = (state) => {
    
    let featuredRestaurants = Object.values(state.entities.restaurants);
    let featuredCities = Object.values(state.entities.cities).slice(0, 8)

    return {
        featuredRestaurants: featuredRestaurants,
        cities: featuredCities
    }
}

const mdp = dispatch => ({
    fetchCities: () => dispatch(fetchCities()),
    fetchFeaturedRestaurants: () => dispatch(fetchFeaturedRestaurants()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))    
})

export default connect(msp, mdp)(Home)