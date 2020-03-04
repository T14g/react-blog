import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    //Await make sure the API request is complete// dispatch
    await dispatch(fetchPosts());

    //lodash map version to get unique userId's
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

}

//Action creator
//A function in ES6 THAT RETURNS A FUNCTION
//With redux think action creators:
//Can return action objects or can return functions! and r-t automatically call those functions for us
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


//Memoize helps at not making the same request for a user with a given ID over and over again
//it just return the previous value if you call the function again with the same parameters
//Memoize version
// export const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const responese = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: responese.data });
// });

