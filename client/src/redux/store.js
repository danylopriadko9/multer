import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/firstSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
