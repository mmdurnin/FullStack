import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Greeting from './greeting'
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        user: state.entities.users[state.session.id],
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})


export default connect(msp, mdp)(Greeting);