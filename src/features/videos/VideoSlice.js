import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./VideoApi"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error:''
}

export const fetchVideo = createAsyncThunk('videos/fetchVideo', async() => {
    const videos = await getVideos();

    return videos;
})
    

const videoSlice = createSlice({
    name: "videos",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state,action) => {
                state.isError = false;
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideo.rejected, (state,action) => {
                state.isError = true;
                state.isLoading = false;
                state.videos = [];
                state.error = action.error.message;
            })
    }

})

export default videoSlice.reducer;