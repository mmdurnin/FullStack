import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = (restaurantId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(restaurantId)
        .then((reviews) => dispatch(receiveReviews(reviews)))
};

export const createReview = (review, restaurantId) => dispatch => {
    return ReviewAPIUtil.createReview(review, restaurantId)
        .then((review) => {
            dispatch(receiveReview(review))
        })
}

export const deleteReview = (reviewId, restaurantId) => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId, restaurantId)
        .then((reviewId) => dispatch(removeReview(reviewId)))
}