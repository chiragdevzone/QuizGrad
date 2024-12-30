import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topic",
  initialState: {
    showTopic: false,
    showScore: false,
  },
  reducers: {
    show: (state) => {
      state.showTopic = true;
    },

    showS: (state) => {
      state.showScore = true;
    },

    hide: (state) => {
      state.showTopic = false;
    },
    hideS: (state) => {
      state.showScore = false;
    },
  },
});

export const { show, hide, showS, hideS } = topicSlice.actions;
export default topicSlice.reducer;
