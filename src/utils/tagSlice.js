import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tags: [],
  },
  reducers: {
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },

    removeTag: (state, action) => {
      state.tags = state.tags.filter((item) => item !== action.payload);
    },
  },
});

export const { addTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;
