
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchReservations, fetchReservation } from '../../actions/reservation_actions';

const msp = (state) => ({
    reservations: Object.values(state.entities.reservations),
    user: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    fetchReservation: (reservationId) => (fetchReservation(reservationId))
})

export default connect (msp, mdp)(UserProfile);