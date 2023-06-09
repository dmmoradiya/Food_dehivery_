import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const totalAmount = CartCtx.amount.toFixed(2);
  const hasItem = CartCtx.item.length > 0;

  const removeCartItem = (id) => {};
  const addCartItem = (item) => {};

  const Cartitem = (
    <ul className={classes["cart-items"]}>
      {CartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItem}
          onAdd={addCartItem}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {Cartitem}
      <div className={classes.total}>
        <span>total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
