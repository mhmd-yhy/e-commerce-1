import { createSlice } from "@reduxjs/toolkit";
import { editUserProfile, resetUserPassword } from "../Api Requests/UserProfileApiRequests";

const initialState = { resEditUserProfile: [], resetUserPassword: [], isLoading: false };
const UserProfileSlice = createSlice({
  name: "UserProfileSlice", initialState,
  reducers: { clearInitialState: (state) => { state.resEditUserProfile = []; state.resetUserPassword = []; } },
  extraReducers(builder) {
    builder
      ///editUserProfile
      .addCase(editUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resEditUserProfile = action.payload;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.resEditUserProfile = action.payload;
      })
      ///resetUserPassword
      .addCase(resetUserPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resetUserPassword = action.payload;
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.resetUserPassword = action.payload;
      });
  }
});

export const { clearInitialState } = UserProfileSlice.actions;
export default UserProfileSlice.reducer;