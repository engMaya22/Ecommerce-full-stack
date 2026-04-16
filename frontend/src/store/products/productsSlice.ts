import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@types";
import actGetProductsByCategory from "./act/actGetProductsByCategory";
interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCategory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCategory.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetProductsByCategory };
export default productsSlice.reducer;
