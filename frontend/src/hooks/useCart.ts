import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actAddToCart,
  actGetProductsByItems,
  actRemoveFromCart,
  cleanCartProductsFullInfo,
} from "@store/cart/cartSlice";
import { resetOrderStatus } from "@store/orders/ordersSlice";

const useCart = () => {
 
  const dispatch = useAppDispatch();


  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
   

  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
       dispatch(actAddToCart({ productId: id, quantity }));
      dispatch(actGetProductsByItems());//refresh state
    },
    [dispatch]
  );

  // const removeItemHandler = useCallback(
  //   (id: number) => {
  //     dispatch(cartItemRemove(id));
  //   },
  //   [dispatch]
  // );
const removeItemHandler = useCallback(
  async (id: number) => {
    await dispatch(actRemoveFromCart(id));
    // optional safety:
    // dispatch(actGetProductsByItems());
  },
  [dispatch]
);
  // const products = productsFullInfo.map((el) => ({
  //   ...el,
  //   quantity: items[el.id],
  // }));
  const products = productsFullInfo; // already has quantity

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    products,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  };
};

export default useCart;
