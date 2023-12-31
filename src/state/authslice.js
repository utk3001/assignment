import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
 }

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export const {login, register, logout} = authSlice.actions

export default authSlice.reducer