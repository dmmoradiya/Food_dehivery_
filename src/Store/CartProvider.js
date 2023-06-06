import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addItemtoCartHandler = (item) => {};
  const removeItemtoCartHandler = (id) => {};

  const cartContext = {
    item: [],
    amount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
