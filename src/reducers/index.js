import { combineReducers } from 'redux';
import { updateFollowing, refreshWithNewPost } from '../actions';

function updateProfile(state = {following: 0}, action) {
    switch (action.type) {
        case 'UPDATE_FOLLOWING': return Object.assign({}, state, {
            following: action.following
        });
    }
    return state;
}

function updatePosts(state = {totalPosts: 5}, action){
    switch (action.type) {
        case 'UPDATE_POSTS': return Object.assign({}, state, {
            totalPosts: action.totalPosts
        });
    }
    return state;
}

const reducer = combineReducers({
    followings: updateProfile,
    posts: updatePosts
});

export default reducer;