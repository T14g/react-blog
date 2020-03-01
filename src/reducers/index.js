import { combineReducers } from 'redux';
import  postReducer from './postReducer';
import usersReducer from './usersReducer';

//Trick reducers at start to avoid erros on console 
//Because you need a valid reducer at start on this combineReducers
//And you have none at start
export default combineReducers({
    posts :  postReducer,
    users: usersReducer
});