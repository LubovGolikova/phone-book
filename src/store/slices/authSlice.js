import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn:false,
    isLogginLoading: false,
    error: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login_request:(state) => {
            state.isLogginLoading = true
        },
        login_success:(state,action) => {
            state.isLoggedIn = true
        },
        login_fail:(state) => {
            state.error = true
        },

    }
});

export const {login_request, login_success, login_fail} =authSlice.actions;
export default authSlice.reducer;