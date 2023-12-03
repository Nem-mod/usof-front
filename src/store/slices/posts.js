import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async ({page, size}) => {
        const {data}  = await axios.get(`/posts?page=${page}&size=${size}`);
        return data;
    },
);


const initialState = {
        data: null,
        status: "loading",
}


const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        });
    },
});

export const postsReducer = postsSlice.reducer;
