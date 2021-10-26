import {createSlice} from "@reduxjs/toolkit";

export const phoneSlice = createSlice( {
    name: 'phone',
    initialState: {
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
        ],
    },
    reducers: {
        add_phone:(state,action) => {
            state.phone = action.payload;
        },
        delete_phone: (state) => {
            state.phone = '';
        },
        edit_phone:(state,action) => {
            state.phone = action.payload;
        }
    }
});
export const {add_phone, delete_phone, edit_phone} = phoneSlice.actions;
export default phoneSlice.reducer;
export const phoneSelector = (state) => state.phone;