import {createSlice} from '@reduxjs/toolkit'

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: {
        phones: [],
        isLoading: false
    },
    reducers: {
        clearState:(state) => {
            state.phones = [];
            state.isLoading = false;
        },
        set_phones:(state,action) => {
             state.phones = action.payload;
        },
        set_phones_loading:(state) =>  {
            state.isLoading = true;
        },
        reset_phones_loading:(state) => {
            state.isLoading = false;
        }
    }
});
export const {clearState, set_phones, set_phones_loading, reset_phones_loading} = phoneSlice.actions;
export default phoneSlice.reducer;
export const phoneSelector = (state) => state.phone;