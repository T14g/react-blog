import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    //Await make sure the API request is complete// dispatch
    await dispatch(fetchPosts());

    //Chain give the return of n function to n+1 function and so on
    _.chain(getState().posts)
        .map('userId')//results from here goes to function bellow
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()//execute all steps 
}

//Action creator = a function in ES6 THAT RETURNS A FUNCTION
//With redux thunk action creators:
//Can return action objects or can return functions! and thunk automatically call those functions for us
//Redux thunk will call the function sending it to dispatch but will wait for the request
//After getting the request completed manually calls the dispatch!! KEY, with a plain js new object!
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const responese = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: responese.data });
};


