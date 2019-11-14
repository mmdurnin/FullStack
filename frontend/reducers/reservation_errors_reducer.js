import { RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, CLEAR_ERRORS } from '../actions/reservation_actions';

const _nullErrors = [];

const ReservationErrorsReducer = (state=_nullErrors, action) => {
    Object.freeze(state);

    switch(action.type) {
        case(RECEIVE_RESERVATION_ERRORS):
            return action.errors;
        case(RECEIVE_RESERVATION):
            return _nullErrors;
        case(RECEIVE_RESERVATIONS):
            return _nullErrors
        case(CLEAR_ERRORS):
            return _nullErrors;
        default:
            return state;
    }
}

export default ReservationErrorsReducer;