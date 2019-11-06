import { RECEIVE_USER, REMOVE_SESSION } from '../actions/session_actions';

const UsersReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case(RECEIVE_USER):
            let user = { [action.user.id]: action.user }
            return Object.assign({}, user);
        case(REMOVE_SESSION):   
            return Object.assign({}, {})
        default:
            return state;
    }
}


export default UsersReducer;