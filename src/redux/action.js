import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGOUT
} from '../redux/actionTypes/action.type';

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
    payload: {}
});

export const loginFail = () => ({
    type: LOGIN_FAIL
});

export const loginRequest = () => ({
    type:  LOGIN_REQUEST
});

export const logout = () => ({
    type: LOGOUT
});