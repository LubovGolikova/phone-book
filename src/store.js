import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './store/slices/counterSlice';
import {authSlice} from "./store/slices/authSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});
export default store