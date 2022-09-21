const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: null,
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
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,filterAuthor,resetFilter } = filterSlice.actions;
