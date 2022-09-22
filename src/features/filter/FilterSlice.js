const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: null,
  partialVideo: [],
  perPage: 2,
  pageCount: 1,
  offset:0,
};

const filterSlice = createSlice({
  name: "videos",
  initialState,

  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    filterAuthor: (state,action) => {
      state.author = action.payload
    },
    removeAuthor: (state,action) => {
      state.author = null
    },
    resetFilter: (state) => {
      state.tags = [];
      state.search ="";
      state.author = null;
    },
    setPartialVideo: (state,action) => {
      state.partialVideo = action.payload
    },
    setOffset : (state,action) => {
      state.offset = action.payload
    },
    setPageCount: (state,action) => {
      state.pageCount = action.payload
    },
    SetPerpageAction : (state,action) => {
      state.perPage = action.payload
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,filterAuthor,resetFilter,setPartialVideo,setOffset,setPageCount,SetPerpageAction} = filterSlice.actions;
