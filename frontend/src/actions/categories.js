import * as Api from './../utils/api';

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

export const getCategories = () => dispatch => {
    Api.fetchCategories()
        .then(categories => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS, 
                categories
            });
        });
}