import jsonPlaceHolder from '../apis/jsonPlaceholder';

//Action creator
//A function in ES6 THAT RETURNS A FUNCTION
//With redux think action creators:
//Can return action objects or can return functions! and r-t automatically call those functions for us
//Redux thunk will call the function sending it to dispatch but will wait for the request
//After getting the request completed manually calls the dispatch!! KEY, with a plain js new object!
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response});
    };