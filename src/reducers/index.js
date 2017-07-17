import messages from './messageReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    messages
});
export default rootReducer;
