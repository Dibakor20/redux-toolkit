import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo, updateLike, updateUnLikes,} from "./SingleVideoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: false,
};

export const fetchSingleVideo = createAsyncThunk(
  "singleVideo/fetchSingleVideo",
  async (id) => {
    const singleVideo = await getSingleVideo(id);
    return singleVideo;
  }
);

export const fetchVideoLike = createAsyncThunk(
  "singleVideo/fetchVideoLike",
  async (id) => {
    const updateVideo = await updateLike(id);
    return updateVideo;
  }
);

export const fetchVideoUnLike = createAsyncThunk(
  "singleVideo/fetchVideoUnLike",
  async (id) => {
    const updateVideo = await updateUnLikes(id);
    return updateVideo;
  }
);

const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = {};
        state.error = action.error.message;
      });
    
    builder
      .addCase(fetchVideoLike.fulfilled, (state, action) => {
        state.video.likes = action.payload.likes
      });
      builder
      .addCase(fetchVideoUnLike.fulfilled, (state, action) => {
        state.video.unlikes = action.payload.unlikes
      }) 
  },
});

export default singleVideoSlice.reducer;
