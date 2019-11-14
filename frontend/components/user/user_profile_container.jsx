
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchReservations, deleteReservation, updateReservation } from '../../actions/reservation_actions';

const msp = (state) => {
    return {
    reservations: Object.values(state.entities.reservations),
    user: state.entities.users[state.session.id]
}}

const mdp = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    updateReservation: (reservation) => dispatch(updateReservation(reservation))
})

export default connect (msp, mdp)(UserProfile);