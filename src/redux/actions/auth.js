import AuthService from '../../services/auth.service';
import { getUserInfos } from './profile';


export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

export const SET_MESSAGE = 'SET_MESSAGE';

export const register = (firstName, lastName, email, password) => dispatch => {
    return AuthService.register(firstName, lastName, email, password).then(
        response => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (email, password, rememberMe) => dispatch => {
    return AuthService.login(email, password).then(
        data => {
            if (rememberMe) {
                localStorage.setItem('memo-useremail', email);
                localStorage.setItem('memo-userpassword', password);
            } else {
                localStorage.removeItem('memo-useremail');
                localStorage.removeItem('memo-userpassword');
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.body,
            });

            dispatch(getUserInfos());
        },
        error => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
        }
    );
};

export const logout = () => dispatch => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};