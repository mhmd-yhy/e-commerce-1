import { createSlice } from "@reduxjs/toolkit";
import { addAdress, deleteAdress, editAdress, getAllAdress, getOneAdress } from "../Api Requests/AdressApiRequests";

const initialState = { resAddAdress: [], allAdress: [], oneAdress: [], resDeleteAdress: [], resEditAdress: [], isLoading: [] };
const AdressSlice = createSlice({
  name: "AdressSlice", initialState,
  reducers: { clearInitialState: (state) => { state.resAddAdress = []; state.resDeleteAdress = []; state.resEditAdress = []; } },
  extraReducers(builder) {
    builder
      ///addAdress
      .addCase(addAdress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAdress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resAddAdress = action.payload;
      })
      .addCase(addAdress.rejected, (state, action) => {
        state.isLoading = false;
        state.resAddAdress = action.payload;
      })
      ///getAllAdress
      .addCase(getAllAdress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAdress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAdress = action.payload;
      })
      .addCase(getAllAdress.rejected, (state, action) => {
        state.isLoading = false;
        state.allAdress = action.payload;
      })
      ///getOneAdress
      .addCase(getOneAdress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneAdress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneAdress = action.payload;
      })
      .addCase(getOneAdress.rejected, (state, action) => {
        state.isLoading = false;
        state.oneAdress = action.payload;
      })
      ///deleteAdress
      .addCase(deleteAdress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAdress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resDeleteAdress = action.payload;
      })
      .addCase(deleteAdress.rejected, (state, action) => {
        state.isLoading = false;
        state.resDeleteAdress = action.payload;
      })
      ///editAdress
      .addCase(editAdress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAdress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resEditAdress = action.payload;
      })
      .addCase(editAdress.rejected, (state, action) => {
        state.isLoading = false;
        state.resEditAdress = action.payload;
      });
  }
});
export const { clearInitialState } = AdressSlice.actions;
export default AdressSlice.reducer;