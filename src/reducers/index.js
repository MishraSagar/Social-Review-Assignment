import { combineReducers } from 'redux';

function updateProfile(state = {numberOfFollowing: 0}, action) {
    switch (action.type) {
        case 'UPDATE_FOLLOWING': return Object.assign({}, state, {
            numberOfFollowing: action.following
        });
    }
    return state;
}

function updatePosts(state = {isNewPostAvailable: false}, action) {
    switch (action.type) {
        case 'UPDATE_POSTS': return Object.assign({}, state, {
            isNewPostAvailable: action.isNewPostAvailable
        });
    }
    return state;
}

function updateUserInfo(state = {isUpdated: false}, action) {
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