import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchAuthMe = createAsyncThunk("auth/me", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  },
);

export const fetchVerify = createAsyncThunk(
  "auth/fetchVerify",
  async (params) => {
    const { data } = await axios.post("/auth/register/verification", params);
    return data;
  },
);


export const fetchUpdateAvatar = createAsyncThunk(
    "user/fetchUpdateAvatar",
    async (params) => {
      const formData = new FormData();
      formData.append("file", params);
      const { data } = await axios.patch("/users/avatar", formData);
      return data;
    }
)


export const fetchUpdateUser = createAsyncThunk(
    "user/fetchUpdateUser",
    async (params) => {
      const { data } = await axios.patch("/users/me", params)
      return data
    }
)

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  // extraReducers: {
  //   [fetchAuth.fulfilled]: (state, action) => {
  //     state.status = "loaded";
  //     state.data = action.payload;
  //   },
  //   [fetchAuthMe.fulfilled]: (state, action) => {
  //     state.status = "loaded";
  //     state.data = action.payload;
  //   },
  //   [fetchRegister.fulfilled]: (state, action) => {
  //     state.status = "loaded";
  //     state.data = action.payload;
  //   },
  //   [fetchVerify.fulfilled]: (state, action) => {
  //     state.status = "loaded";
  //     state.data = action.payload;
  //   },
  //
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchVerify.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchUpdateAvatar.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchUpdateUser.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });

  }
});

export const authReducer = authSlice.reducer;

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const selectUserData = (state) => state.auth.data;
export const {logout} = authSlice.actions;