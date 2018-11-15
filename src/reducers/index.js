import { combineReducers } from 'redux';
import { updateFollowing, refreshWithNewPost, refreshUserInfo } from '../actions';

function updateProfile(state = {following: 0}, action) {
    switch (action.type) {
        case 'UPDATE_FOLLOWING': return Object.assign({}, state, {
            following: action.following
        });
    }
    return state;
}

function updatePosts(state = {totalPosts: 5}, action) {
    switch (action.type) {
        case 'UPDATE_POSTS': return Object.assign({}, state, {
            totalPosts: action.totalPosts
        });
    }
    return state;
}

function updateUserInfo(state = {isUserUpdated: false}, action) {
    switch (action.type) {
        case 'REFRESH_USER_PROFILE': return Object.assign({}, state, {
            isUpdated: action.isUserUpdated
        });
    }
    return state;
}

const reducer = combineReducers({
    followings: updateProfile,
    posts: updatePosts,
    updateUser: updateUserInfo
});

export default reducer;