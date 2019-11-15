import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return {
    reviews: Object.values(state.entities.reviews),
    restaurant: state.entities.restaurants[ownProps.restaurantId]
}}

const mdp = dispatch => ({
    fetchReviews: (restaurantId) => dispatch(fetchReviews(restaurantId))
})

export default connect(msp, mdp)(ReviewIndex)