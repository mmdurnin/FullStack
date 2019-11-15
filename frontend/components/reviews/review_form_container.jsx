import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const msp = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.restaurantId],
    }
}

const mdp = dispatch => ({
    createReview: (review, restaurantId) => dispatch(createReview(review, restaurantId)),
    fetchReviews: (restaurantId) => dispatch(fetchReviews(restaurantId))
})

export default connect(msp, mdp)(ReviewForm);