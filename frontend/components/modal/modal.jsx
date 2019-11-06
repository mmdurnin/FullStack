import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import LoginUser from '../session/login_user_container';
import SignupUser from '../session/signup_user_container';
import { connect } from 'react-redux';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case('login'):

            component = <LoginUser />;
            break;
        case ('signup'):

            component = <SignupUser />;
            break;
        default: 
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = (state) => ({
    modal: state.ui.modal
})

const mdp = dispatch => ({
    closeModal: () => {  
        dispatch(closeModal())
        dispatch(clearErrors())
    }
})

export default connect(msp, mdp)(Modal);