import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { useDispatch } from 'react-redux';

import appReducer from './../slices/appSlice';

export const rootReducer = combineReducers({
    app: appReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();