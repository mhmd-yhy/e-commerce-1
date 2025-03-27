import { createSlice } from "@reduxjs/toolkit";
import { applayDeliver, applayPay, create_Card_Order, create_Cash_Order, getAllOrders, getOneOrder } from "../Api Requests/OrderApiRequests";

const initialState = { resCreateOrder: [], allOrders: [], oneOrder: [], resPaid: [], resDelivered: [], isLoading: false };

const OrderSlice = createSlice({
  name: "OrderSlice", initialState,
  reducers: { clearInitialState: (state) => { state.resCreateOrder = []; state.resPaid = []; state.resDelivered = []; } },
  extraReducers(builder) {
    builder
      ///create_Cash_Order
      .addCase(create_Cash_Order.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create_Cash_Order.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateOrder = action.payload;
      })
      .addCase(create_Cash_Order.rejected, (state, action) => {
        state.isLoading = false;
        state.resCreateOrder = action.payload;
      })
      ///create_Card_Order
      .addCase(create_Card_Order.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create_Card_Order.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resCreateOrder = action.payload;
      })
      .addCase(create_Card_Order.rejected, (state, action) => {
        state.isLoading = false;
        state.resCreateOrder = action.payload;
      })
      ///getAllOrders
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allOrders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.allOrders = action.payload;
      })
      ///getOneOrder
      .addCase(getOneOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneOrder = action.payload;
      })
      .addCase(getOneOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.oneOrder = action.payload;
      })
      ///applayPay
      .addCase(applayPay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applayPay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resPaid = action.payload;
      })
      .addCase(applayPay.rejected, (state, action) => {
        state.isLoading = false;
        state.resPaid = action.payload;
      })
      ///applayDeliver
      .addCase(applayDeliver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applayDeliver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resDelivered = action.payload;
      })
      .addCase(applayDeliver.rejected, (state, action) => {
        state.isLoading = false;
        state.resDelivered = action.payload;
      });
  }
});
export const { clearInitialState } = OrderSlice.actions;
export default OrderSlice.reducer;