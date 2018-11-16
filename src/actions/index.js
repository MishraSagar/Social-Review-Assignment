export function updateFollowing(following=0) {
    return { type: 'UPDATE_FOLLOWING', following };
}

export function refreshWithNewPost(isNewPostAvailable = false) {
    return { type: 'UPDATE_POSTS', isNewPostAvailable};
}

export function refreshUserInfo(isUserUpdated = false) {
    return { type: 'REFRESH_USER_PROFILE', isUserUpdated};
}