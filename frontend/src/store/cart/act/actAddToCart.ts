import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";
import axiosErrorHandler from "@utils/axiosErrorHandler";
type TAddToCartPayload = {
  productId: number;
  quantity: number;
};
const actAddToCart = createAsyncThunk(
  "cart/actAddToCart",
  async ({ productId, quantity }: TAddToCartPayload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axiosInstance.post("/cart/update", {
        productId,
        quantity,
      });

      return response.data;
    } catch (error) {
      console.log("API ERROR FULL:", error.message);

      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);

export default actAddToCart;
