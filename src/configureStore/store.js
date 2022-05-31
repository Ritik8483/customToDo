import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from '../reducers/reducer';
export const store = configureStore({
  reducer: {
    toDoReducer:toDoSlice
  }
})