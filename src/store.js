import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from "./slices/authSlice";
import {phonesSlice} from "./slices/phonesSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        phones: phonesSlice.reducer
    },
});
export default store