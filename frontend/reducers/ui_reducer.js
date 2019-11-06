import ModalReducer from './modal_reducer';
import { combineReducers } from 'redux';

const UIReducer = combineReducers({
    modal: ModalReducer
});

export default UIReducer;