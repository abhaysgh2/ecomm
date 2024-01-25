import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  increase,
  addToCartDispatch,
  calculateTotals,
} from "../../features/cart/cartSlice";
import { useEffect } from "react";

export const ShowAddToCartButton = (props) => {
  const dispatch = useDispatch();

  const { productId, product } = props;
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  const addToCart = (id, product) => {
    const addProduct = {
      id: product.id,
      title: product.title,
      price: product.price.toString(),
      img: product.images[0],
      amount: 1,
    };
    var checkAdd = false;
    cartItems.map((item) => {
      if (item.id === id) {
        dispatch(increase({ id }));
        checkAdd = true;
      }
    });
    if (!checkAdd) {
      dispatch(addToCartDispatch({ addProduct }));
    }
  };
  return (
    <div>
      <div className="addToCartButtonContainer">
        <button
          className="addToCartButton"
          onClick={() => addToCart(productId, product)}
        >
          Add to Cart
        </button>
        <span>|</span>
        <button className="addToCartButton">Info</button>
      </div>
    </div>
  );
};
