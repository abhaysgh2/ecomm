import CartContainer from "../components/cart/CartContainer";
import { useDispatch, useSelector } from "react-redux/";
import { calculateTotals } from "../features/cart/cartSlice";
import { useEffect } from "react";

export const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <CartContainer />
    </>
  );
};
