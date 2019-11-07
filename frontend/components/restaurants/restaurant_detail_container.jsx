import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import fetchRestaurants from '../../actions/restaurant_actions';

const msp = (state, ownProps) => ({
    restaurant: state.restaurants[ownProps.match.params.restaurantId]
})

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(msp, mdp)(RestaurantDetail);