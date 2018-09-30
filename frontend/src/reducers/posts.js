import { GET_POSTS_SUCCESS } from '../actions/posts';

const posts = (state = [], action) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}

export default posts;