import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import CurrentCityReducer from './current_city_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    currentCity: CurrentCityReducer,
    errors: ErrorsReducer,
    ui: UIReducer
});

export default RootReducer;