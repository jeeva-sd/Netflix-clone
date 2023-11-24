
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export const { dispatch } = store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;