import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import topicSlice from "./topicSlice";
import tagSlice from "./tagSlice";
import mcqsSlice from "./mcqsSlice";
import attemptSlice from "./attemptSlice";

const appStore = configureStore({
  reducer: {
    auth: authSlice,
    topic: topicSlice,
    tag: tagSlice,
    mcqs: mcqsSlice,
    attempt: attemptSlice,
  },
});

export default appStore;
