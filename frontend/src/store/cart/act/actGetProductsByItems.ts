import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";
import axiosInstance from "../../../api/axiosInstance";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
    //  const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      // const response = await axios.get<TResponse>(
      //   `/products?${concatenatedItemsId}`,
      //   { signal }
      // );
      const response = await axiosInstance.get<TResponse>(
        "/cart",
        { signal }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByItems;
