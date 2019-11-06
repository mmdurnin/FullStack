import React from 'react';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignupUser from './signup_user';


const msp = (state) => ({
    user: {
        name: "",
        email: "",
        password: ""
    },
    errors: state.errors.session
})

const mdp = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="button-modal" onClick={() => dispatch(openModal('login'))}>
                Log In
            </button>
        ),
        closeModal: () => {  
            dispatch(closeModal())
            dispatch(clearErrors())
        },
        login: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SignupUser);