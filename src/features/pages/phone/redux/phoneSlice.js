import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const fetchPhoneById = createAsyncThunk(

);
const phoneState = {
    phone: [
        {
            "id": "6002f201d378ac1d081edfe1",
            "isActive": false,
            "age": 26,
            "name": {
                "first": "Watson",
                "last": "Slater"
            },
            "company": "NUTRALAB",
            "email": "watson.slater@nutralab.biz",
            "phone": "+1 (864) 439-3232",
            "address": "451 Montauk Court, Sussex, Marshall Islands, 312",
            "registered": "2018-02-20T05:32:57.432Z"
        },
    ]
};

export const phoneSlice = createSlice( {
    name: 'phone',
    initialState: phoneState,
    reducers: {
        addPhone:(state,action) => {
            state.phone = action.payload;
        },
        deletePhone: (state) => {
            state.phone = '';
        },
        editPhone:(state,action) => {
            state.phone = action.payload;
        }
    }
});
export const {addPhone, deletePhone, editPhone} = phoneSlice.actions;
export default phoneSlice.reducer;
export const phoneSelector = (state) => state.phone;