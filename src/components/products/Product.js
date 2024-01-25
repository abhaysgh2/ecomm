// import { useState } from "react";
import { ShowAddToCartButton } from "./ShowAddToCartButton";

const Product = (props) => {
  const { product, showAddToCart, setShowAddToCart } = props;

  const handleOnClick = () => {
    var remove = false;
    showAddToCart.map((eachId) => {
      if (eachId === product.id) {
        remove = true;
      }
    });
    if (remove) {
      setShowAddToCart(showAddToCart.filter((eachId) => eachId !== product.id));
    } else {
      setShowAddToCart([...showAddToCart, product.id]);
    }
  };

  return (
    <div>
      <button className="product-box-btn" onClick={() => handleOnClick()}>
        <div className="product-box">
          <img
            className="image-product-box"
            src={product.images[0]}
            alt={product.brand}
          />
        </div>
        <div>{product.title}</div>
        <div>${product.price}</div>
      </button>
      {showAddToCart.map((eachId) => {
        if (eachId === product.id) {
          return (
            <ShowAddToCartButton
              key={product.id}
              productId={product.id}
              product={product}
            />
          );
        }
      })}
    </div>
  );
};
export default Product;
