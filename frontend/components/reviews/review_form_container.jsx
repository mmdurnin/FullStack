import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, fetchReviews } from '../../actions/review_actions';


const msp = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.restaurantId],
        loggedIn: Boolean(state.session.id)
    }
}

const mdp = dispatch => ({
    createReview: (review, restaurantId) => dispatch(createReview(review, restaurantId)),
    fetchReviews: (restaurantId) => dispatch(fetchReviews(restaurantId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(ReviewForm);