import {createSlice} from '@reduxjs/toolkit'
const phonesState = {
    phones: [],
    isLoading: false
};
export const phonesSlice = createSlice({
    name: 'phones',
    initialState: phonesState,
    reducers: {
        clearState:(state) => {
            state.phones = [];
            state.isLoading = false;
        },
        setPhones:(state,action) => {
             state.phones = action.payload;
        },
        setPhonesLoading:(state) =>  {
            state.isLoading = true;
        },
        resetPhonesLoading:(state) => {
            state.phones = [];
            state.isLoading = false;
        }
    }
});
export const {clearState, setPhones, setPhonesLoading, resetPhonesLoading} = phonesSlice.actions;
export default phonesSlice.reducer;
export const phonesSelector = (state) => state.phones;