import { createSlice } from "@reduxjs/toolkit";

const attemptSlice = createSlice({
  name: "attempt",
  initialState: {
    isAttempt: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    },
  },
  reducers: {
    markAttempt: (state, action) => {
      const index = action.payload;
      state.isAttempt[index] = true;
    },
    resetAttemptAll: (state) => {
      state.isAttempt = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      };
    },
  },
});

export const { markAttempt, resetAttemptAll } = attemptSlice.actions;
export default attemptSlice.reducer;
