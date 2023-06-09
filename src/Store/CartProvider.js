import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartReducer = {
  item: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.item[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartReducer;
};

const CartProvider = (props) => {
  const [CartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartReducer
  );

  const addItemtoCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemtoCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: CartState.item,
    amount: CartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };
  // console.log(cartContext.amount);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
