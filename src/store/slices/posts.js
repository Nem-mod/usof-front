import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async ({page, size, search}) => {
        const {data}  = await axios.get(`/posts?page=${page}&size=${size}` + (search ? `&search=${search}` : ""));
        return {data: data, search: search};
    },
);


const initialState = {
        data: null,
        status: "loading",
        search: ""
}


const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.search = action.payload.search;
            state.status = "loaded";
        });
    },
});

export const postsReducer = postsSlice.reducer;
