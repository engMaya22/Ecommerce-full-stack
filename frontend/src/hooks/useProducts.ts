import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCategory,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";

const useProducts = () => {
  const params = useParams();
  const productPrefix = params.prefix;//need to get prefix of category
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const promise = dispatch(
   
      actGetProductsByCategory(params.id as string)
    );

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch, params]);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishListItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  return { loading, error, productsFullInfo, productPrefix };
};

export default useProducts;
