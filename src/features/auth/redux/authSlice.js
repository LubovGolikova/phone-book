import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import authService from '../services/auth.service';
export const register = createAsyncThunk(
    '/register',
    async({email, password}, thunkAPI) => {
        try {
            console.log("sadad")
            // const res = await authService;
        } catch (e) {
            console.log('Error', e.response.data);

        }
    }
)

const authState = {
    emailUser: "",
    isLogin: false,
    isLoading: false,
    error: false
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        clearState:(state) => {
            state.emailUser = "";
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = false;
            return state;
        },
        loginSuccess:(state,action) => {
             state.emailUser = action.payload;
             state.isSuccess = true;
            localStorage.setItem('email',JSON.stringify(action.payload))
        },
        loginRequest:(state) => {
            state.isLoading = true;
        },
        loginFail:(state) => {
            state.isError = true;
        },
    //     logoutSuccess: () => {this.authState
    //     },
    }
});

export const {loginRequest, loginSuccess, loginFail, logoutSuccess, clearState} = authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state) => state.auth;
