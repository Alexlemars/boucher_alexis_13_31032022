import { getCookie } from '../../services/use.cookie';

const token = getCookie('signin-token');

const initialState = token ? { isLoggedIn: true, token } : { isLoggedIn: false, token: null };


const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOGOUT = 'LOGOUT';

const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL';

const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
const UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL';



const authUser = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                firstName: payload.firstName,
                lastName: payload.lastName,
                id: payload.id,
                email: payload.email,
            };

        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                firstName: '',
                lastName: '',
                id: '',
                email: '',
            };

        case GET_USER_PROFILE:
            return {
                ...state,
                isLoggedIn: true,
            };

        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                firstName: payload.firstName,
                lastName: payload.lastName,
                id: payload.id,
                email: payload.email,
            };

        case GET_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
                isLoggedIn: false,
                token: null,
            };

        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                firstName: payload.firstName,
                lastName: payload.lastName,
            };

        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};

export default authUser;