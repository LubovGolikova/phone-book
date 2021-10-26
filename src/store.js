import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from "./slices/authSlice";
import {phoneSlice} from "./slices/phoneSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        phone: phoneSlice.reducer
    },
});
export default store