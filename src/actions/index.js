export function updateFollowing(following=0) {
    return { type: 'UPDATE_FOLLOWING', following };
}

export function refreshWithNewPost(totalPosts = 5) {
    return { type: 'UPDATE_POSTS', totalPosts};
}

export function refreshUserInfo(isUserUpdated = false) {
    return { type: 'REFRESH_USER_PROFILE', isUserUpdated};
}