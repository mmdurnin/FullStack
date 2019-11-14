import SessionErrorsReducer from './session_errors_reducer';
import ReservationErrorsReducer from './reservation_errors_reducer';
import { combineReducers } from 'redux';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    reservation: ReservationErrorsReducer
})

export default ErrorsReducer