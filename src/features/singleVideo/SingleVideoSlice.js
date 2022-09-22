import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo, updateReaction} from "./SingleVideoApi";

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


// export const fetchVideoReaction = createAsyncThunk(
//   "singleVideo/fetchVideoReaction",
//   async ({id,reaction}) => {
//     const updateVideo = await updateReaction({id, reaction});
//     return updateVideo;
//   }
// );


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
    
      // builder
      // .addCase(fetchVideoReaction.pending, (state) => {
      //   return state
      // })
      // .addCase(fetchVideoReaction.fulfilled, (state, action) => {
      //   state.video.likes = action.payload.likes
      //   state.video.unlikes = action.payload.unlikes
      // })
      // .addCase(fetchVideoReaction.rejected, (state, action) => {
      //   return state
      // });
  
  },
});

export default singleVideoSlice.reducer;
