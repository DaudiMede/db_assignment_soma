import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isUserAuthenticated: boolean;
}

const initialState: AuthState = {
    isUserAuthenticated: false
};


export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setAuthenticated: (state, { payload }) => {
            state.isUserAuthenticated = payload;
        },

        resetAuthentication: (state) => {

        }
    }
});

export const { setAuthenticated } = authenticationSlice.actions;
export default authenticationSlice.reducer;