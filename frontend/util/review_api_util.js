export const fetchReviews = (restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews`,
        method: 'GET'
    })
}

export const createReview = (review, restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const deleteReview = (reviewId, restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews/${reviewId}`,
        method: 'DELETE'
    })
}