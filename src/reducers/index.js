import { combineReducers } from 'redux';
import { updateFollowing } from '../actions';

function updateProfile(state = {following: 0}, action) {
    switch (action.type) {
        case 'UPDATE_FOLLOWING': return Object.assign({}, state, {
            following: action.following
        });
    }
    return state;
}

const reducer = combineReducers({
    followings: updateProfile,
});

export default reducer;