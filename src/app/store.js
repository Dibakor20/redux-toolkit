import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videos/VideoSlice';
import tagReducer from '../features/tags/TagSlice';
import singleVideoReducer from '../features/singleVideo/SingleVideoSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
    tag: tagReducer,
    singleVideo:singleVideoReducer,
  },
});
