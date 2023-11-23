import {authReducer} from "./slices/auth";
import {commentReducer} from "./slices/comment";
import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slices/posts";
import {postReducer} from "./slices/post";

const store = configureStore({
  reducer: {
    auth: authReducer,
    comment: commentReducer,
    posts: postsReducer,
    post: postReducer
  },
});

export default store;