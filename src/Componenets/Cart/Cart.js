import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const Cartitem = (
    <ul className={classes["cart-items"]}>
      {[{ name: "Sushi", id: "m1", amount: 2, price: "12.99" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {Cartitem}
      <div className={classes.total}>
        <span>total</span>
        <span>35.12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
