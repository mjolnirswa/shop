import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import itemReducer from './slices/itemSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        item: itemReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;