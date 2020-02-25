import { combineReducers } from 'redux';


//Trick reducers at start to avoid erros on console 
//Because you need a valid reducer at start on this combineReducers
//And you have none at start
export default combineReducers({
    trickReducers : () => 'Trick reducers for no errors'
});