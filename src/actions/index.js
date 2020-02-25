import jsonPlaceHolder from '../apis/jsonPlaceholder';

//Action creator
export const fetchPosts = async () => {
    // Bad aproch!!!!, breaking rules of action creator, not returning a plain js object BECAUSE ASYNC/AWAIT    
    //Returned a request object lol not an action
    const response = await jsonPlaceHolder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}