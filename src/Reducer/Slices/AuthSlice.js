import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, forgotPassword, loginUser, resetPassword, verifyResetCode } from "../Api Requests/AuthApiRequests";
const initialState = {
  createUser: [],
  loginUser: [],
  forgotPassword: [],
  verifyResetCode: [],
  resetPassword: [],
  isLoading: false
};
const AuthSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: { clearInitialState: (state) => { state.createUser = []; state.loginUser = []; state.forgotPassword = []; state.verifyResetCode = []; state.resetPassword = []; } },
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
      })

      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.forgotPassword = action.payload;
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPassword = action.payload;
        state.isLoading = false;
      })

      .addCase(verifyResetCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyResetCode.fulfilled, (state, action) => {
        state.verifyResetCode = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyResetCode.rejected, (state, action) => {
        state.verifyResetCode = action.payload;
        state.isLoading = false;
      })

      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetPassword = action.payload;
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPassword = action.payload;
        state.isLoading = false;
      });




  }
});
export const { clearInitialState } = AuthSlice.actions;
export default AuthSlice.reducer;
