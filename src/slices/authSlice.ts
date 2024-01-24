import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService, { RegisterServiceData } from "@/services/authService";

const storage = sessionStorage.getItem("user");

const user = JSON.parse(storage!);

export type SliceInitialState = {
  user: RegisterServiceData | null;
  error: boolean | string[] | null;
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
  async (user: RegisterServiceData, thunkAPI) => {
    const data = await authService.register(user);

    if (data.errors as string[]) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
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
      .addCase(register.pending, (state) => {
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
        state.loading = false;
        state.error = action.payload as string[];
        state.user = null;
      });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
