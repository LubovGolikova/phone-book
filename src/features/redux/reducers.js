import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from '../auth/redux/authSlice';
import {phonesSlice} from "../pages/phoneList/redux/phonesSlice";

const reducers = combineReducers({
    auth: authSlice.reducer,
    phones: phonesSlice.reducer
});

export default reducers;