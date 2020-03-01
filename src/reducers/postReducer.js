//Single file separated reducer
//You not alloweed to return undefined 
//Always have to not return undefined from reducer!! so the last return
export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }                   
}