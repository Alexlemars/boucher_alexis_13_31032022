import UserService from '../../services/user.service';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL';

export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL';

export const getUserInfos = () => dispatch => {
    return UserService.getUserProfile().then(
        response => {
            dispatch({
                type: GET_USER_PROFILE,
            });
            
            dispatch({
                type: GET_USER_PROFILE_SUCCESS,
                payload: response.body,
            });
        },
        error => {
            dispatch({
                type: GET_USER_PROFILE_FAIL,
            });
            console.log("Fail get user's profile", error);
        }
    );
};

export const UpdateUserInfos = data => dispatch => {
    return UserService.updateUserProfile(data).then(
        response => {
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: { ...data },
            });
        },
        error => {
            dispatch({
                type: UPDATE_USER_PROFILE_FAIL,
            });
            console.log("Fail update user's profile", error);
        }
    );
};