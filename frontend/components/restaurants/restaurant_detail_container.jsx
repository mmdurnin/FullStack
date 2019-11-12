import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { createReservation, fetchReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions'; 

const msp = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(RestaurantDetail);