
import { combineReducers } from 'redux';
import authUser from './auth';
import message from './error'; 

const rootReducer = combineReducers({
    authUser,
    message

});

export default rootReducer;