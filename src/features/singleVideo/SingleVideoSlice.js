import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo } from "./SingleVideoApi";

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

const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleVideo.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            })
            .addCase(fetchSingleVideo.fulfilled, (state,action) => {
                state.isError = false;
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchSingleVideo.rejected, (state,action) => {
                state.isError = false;
                state.isLoading = false;
                state.video = {};
                state.error = action.error.message;
          })
  },
});

export default singleVideoSlice.reducer;
