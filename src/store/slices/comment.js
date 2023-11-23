import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchCreateComment = createAsyncThunk(
  "comment/createComment",
  async (params) => {
    const { id, ...body } = params;
    console.log(id, body);
    const { data } = axios.post(`/posts/${id}/comments`, body);
    return data;
  },
);

const initialState = {
  data: null,
  status: "loading",
};

const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateComment.fulfilled, (state, action) => {
      state.status = "loaded";
    });
  },
});

export const commentReducer = commentSlice.reducer;
