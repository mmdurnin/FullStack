
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchReservations } from '../../actions/reservation_actions';

const msp = (state) => ({
    reservations: Object.values(state.entities.reservations)
})

const mdp = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default connect (msp, mdp)(UserProfile);