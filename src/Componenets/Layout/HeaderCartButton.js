import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context.js";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
