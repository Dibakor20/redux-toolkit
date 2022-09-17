import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videos/VideoSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});
