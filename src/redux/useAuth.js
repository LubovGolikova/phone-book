import {useSelector, useDispatch } from 'react-redux';
import { registerSuccess, registerFail, loginSuccess, loginFail,logout } from "../redux/action";

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
// eslint-disable-next-line react-hooks/rules-of-hooks
const user = useSelector((state) => state.user);
// eslint-disable-next-line react-hooks/rules-of-hooks
const isLoggedIn = useSelector((state) => state.isLoggedIn);

export const register = () => {
    try {
        dispatch(registerSuccess(user));
    } catch (error) {
        dispatch(registerFail());
    }
};
export const login = () => {
    try {
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFail());
    }
};
export const logOut = () => {
    dispatch(logout());
};

