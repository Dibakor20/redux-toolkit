const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: null,
  isSelect:false,
  partialVideo: [],
  perPage: 4,
  pageCount: 1,
  offset:0,
};

const filterSlice = createSlice({
  name: "videos",
  initialState,

  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.isSelect = true
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
      state.isSelect = false
    },
    searched: (state, action) => {
      state.search = action.payload;
      state.isSelect = true
    },
    filterAuthor: (state,action) => {
      state.author = action.payload
      state.isSelect = true
    },
    removeAuthor: (state,action) => {
      state.author = null
      state.isSelect = false
    },
    resetFilter: (state) => {
      state.tags = [];
      state.search ="";
      state.author = null;
      state.isSelect= false
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
