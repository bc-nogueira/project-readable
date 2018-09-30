import * as Api from './../utils/api';

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export const getPosts = () => dispatch => {
    Api.fetchPosts()
        .then(posts => {
            dispatch({
                type: GET_POSTS_SUCCESS, 
                posts
            });
        });
}