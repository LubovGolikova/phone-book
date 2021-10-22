import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actionTypes/action.type';

const user = localStorage.getItem("user");

export const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;