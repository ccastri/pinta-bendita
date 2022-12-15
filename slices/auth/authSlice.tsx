import { createSlice } from "@reduxjs/toolkit";


export interface AuthState{
    isAuth: boolean; 
}

const initialState: AuthState = {
    isAuth: false,
    
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
        },
        logOut: (state, action) => {
            state.isAuth = false;
        },
    },
})

export const { login, logOut } =
    authSlice.actions;

export default authSlice.reducer;