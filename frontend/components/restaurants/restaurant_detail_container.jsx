import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const msp = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
})

const mdp = dispatch => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})

export default connect(msp, mdp)(RestaurantDetail);