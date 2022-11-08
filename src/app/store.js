import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import usersSlice from "../features/Users/UsersSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
    user: usersSlice,
  },
});
