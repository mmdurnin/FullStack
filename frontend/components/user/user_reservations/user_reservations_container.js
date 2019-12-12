import { connect } from 'react-redux';
import { fetchReservations, deleteReservation, updateReservation } from '../../../actions/reservation_actions';
import { clearErrors } from "../../../actions/reservation_actions";
import UserReservations from './user_reservations';

const msp = state => ({
  user: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations),
  errors: state.errors.reservation
});

const mdp = dispatch => ({
  fetchReservations: () => dispatch(fetchReservations()),
  deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
  updateReservation: reservation => dispatch(updateReservation(reservation)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(UserReservations)