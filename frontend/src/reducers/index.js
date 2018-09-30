import { combineReducers } from 'redux';

import posts from './posts';

const combinedReducers = combineReducers({
    posts
});

export default combinedReducers;