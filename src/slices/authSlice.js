import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        emailUser: "",
        isSuccess: false,
        isLoading: false,
        isError: false
    },
    reducers: {
        clearState:(state) => {
            state.emailUser = "";
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = false;

            return state;
        },
         login_success:(state,action) => {
             state.emailUser = action.payload;
             state.isSuccess = true;
            localStorage.setItem('email',JSON.stringify(action.payload))
        },
        login_request:(state) => {
            state.isLoading = true;
        },
        login_fail:(state) => {
            state.isError = true;
        },
        logout_success: (state,action) => {
            state.emailUser = "";
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = false;
            localStorage.removeItem('email');
        }
    }
});

export const {login_request, login_success, login_fail, logout_success, clearState} = authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state) => state.auth;
