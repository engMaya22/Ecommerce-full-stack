import useCategories from "@hooks/useCategories";
import { Category } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { TCategory } from "@types";
import { useEffect } from "react";
import { clearCartAfterPlaceOrder } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";


const Categories = () => {
  const { loading, error, records } = useCategories();
  // const dispatch = useAppDispatch();
  // useEffect(()=>{
  //    dispatch(clearCartAfterPlaceOrder());

  // })
 

  return (
    <>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
