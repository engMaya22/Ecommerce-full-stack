import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";
import axiosErrorHandler from "@utils/axiosErrorHandler";

const actRemoveFromCart = createAsyncThunk(
  "cart/actRemoveFromCart",
  async (productId: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await axiosInstance.delete(`/cart/${productId}`);
      return productId; // return id to update state
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actRemoveFromCart;