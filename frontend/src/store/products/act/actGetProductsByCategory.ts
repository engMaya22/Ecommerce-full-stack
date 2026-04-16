import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";
import axiosInstance from "../../../api/axiosInstance";


type TResponse = TProduct[];

const actGetProductsByCategory = createAsyncThunk(
  "products/actGetProductsByCategory",
  async (id: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axiosInstance.get<TResponse>(
        `/products?id=${id}`,
        {
          signal,
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCategory;
