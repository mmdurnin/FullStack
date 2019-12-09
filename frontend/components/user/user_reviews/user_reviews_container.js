import { connect } from 'react-redux';
import { fetchUserReviews } from '../../../actions/review_actions';

import UserReviews from './user_reviews';

const msp = (state) => ({
    reviews: Object.values(state.entities.reviews)
})

const mdp = dispatch => ({
    fetchUserReviews: () => dispatch(fetchUserReviews())
})

export default connect(msp, mdp)(UserReviews);