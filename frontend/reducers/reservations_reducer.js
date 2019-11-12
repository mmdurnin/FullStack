import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from '../actions/reservation_actions';

const ReservationsReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case(RECEIVE_RESERVATION):
            return Object.assign({}, state, action.reservation);
        case(RECEIVE_RESERVATIONS):
            return Object.assign({}, action.reservations);
        case(REMOVE_RESERVATION):
            const nextState = state;
            delete nextState[action.reservationId];
            return nextState;
        default:
            return state;
    }
}

export default ReservationsReducer;