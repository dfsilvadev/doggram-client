import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "@/services/authService";

import { DataToRegisterUser } from "@/components/SignUpForm/types";

const storage = sessionStorage.getItem("user");

const user = JSON.parse(storage!);

export type SliceInitialState = {
  user: DataToRegisterUser | null;
  error: boolean | string | null;
  success: boolean;
  loading: boolean;
};

const initialState: SliceInitialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false
};

// Register an user and sign in
export const register = createAsyncThunk(
  "auth/register",
  async (user: DataToRegisterUser, thunkAPI) => {
    try {
      const data = await authService.register(user);

      if (typeof data === "string") {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        console.log("pending", action);
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log("fulfilled", action);
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        console.log("rejected", action);
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
      });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
