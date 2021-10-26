import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './slices/counterSlice';
import {authSlice} from "./slices/authSlice";
import {phoneSlice} from "./slices/phoneSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        phone: phoneSlice.reducer
    },
});
export default store