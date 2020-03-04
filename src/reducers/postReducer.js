//You not alloweed to return undefined 
//The last return ensures you're not returning undefined
export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }                   
}