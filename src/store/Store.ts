import { configureStore } from "@reduxjs/toolkit";
import  authenticationReducer from './slices/AuthSlice';

const store = configureStore({
    reducer: {
        authenticationReducer: authenticationReducer,
    },
});

export default store;
export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;