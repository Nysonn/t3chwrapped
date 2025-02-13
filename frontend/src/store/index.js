import { configureStore } from '@reduxjs/toolkit';
import designsReducer from './designsSlice';

const store = configureStore({
  reducer: {
    designs: designsReducer,
  },
});

export default store;