import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { createReservation, fetchReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions'; 
import { clearErrors } from '../../actions/reservation_actions';

const msp = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id],
    errors: state.errors.reservation
})

const mdp = dispatch => ({
    fetchRestaurant: (restaurantId) => {
        dispatch(fetchRestaurant(restaurantId))
        dispatch(clearErrors())
    },
    clearErrors: () => dispatch(clearErrors()),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(RestaurantDetail);