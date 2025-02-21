import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser } from "../Api Requests/AuthApiRequests";
const initialState = {
  createUser: [],
  loginUser: [],
  isLoading: false
};
const AuthSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: { clearInitialState: (state) => { state.createUser = []; state.loginUser = []; } },
  extraReducers(builder) {
    builder
      ///createNewUser
      .addCase(createNewUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.createUser = action.payload;
        state.isLoading = false;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.createUser = action.payload;
        state.isLoading = false;
      })
      ///loginUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUser = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUser = action.payload;
        state.isLoading = false;
      });

  }
});
export const { clearInitialState } = AuthSlice.actions;
export default AuthSlice.reducer;
