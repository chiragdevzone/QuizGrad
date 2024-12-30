import { createSlice } from "@reduxjs/toolkit";

const mcqsSlice = createSlice({
  name: "mcqs",
  initialState: {
    mcqsArr: [],
  },
  reducers: {
    addMcqs: (state, action) => {
      state.mcqsArr = action.payload;
    },
    resetMcqsAll: (state) => {
      state.mcqsArr = [];
    },
  },
});

export const { addMcqs, resetMcqsAll } = mcqsSlice.actions;
export default mcqsSlice.reducer;
