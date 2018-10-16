import { GET_CATEGORIES_SUCCESS } from '../actions/categories';

const categories = (state = [], action) => {
    switch(action.type) {
        case GET_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;
    }
}

export default categories;