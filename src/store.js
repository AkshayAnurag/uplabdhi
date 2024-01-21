import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import viewReducer from './features/viewSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    view: viewReducer
  },
});