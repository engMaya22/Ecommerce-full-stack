// Selectors
// Read + compute data

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store";

// const getCartTotalQuantitySelector = createSelector(
//   (state: RootState) => state.cart.items,
//   (items) => {
//     const totalQuantity = Object.values(items).reduce(
//       (accumulator, currentValue) => {
//         return accumulator + currentValue;
//       },
//       0
//     );
//     return totalQuantity;
//   }
// );
const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.productsFullInfo,
  (products) => {
    return products.reduce((acc, product) => {
      return acc + (product.quantity || 0);
    }, 0);
  }
);
export { getCartTotalQuantitySelector };
