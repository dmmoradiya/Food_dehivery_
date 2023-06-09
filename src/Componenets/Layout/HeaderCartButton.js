import React from "react";
import { useState, useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context.js";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const { item } = CartCtx;
  const [btnIsHighlight, setbtnIsHighlight] = useState(false);

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setbtnIsHighlight(true);

    const btntimer = setTimeout(() => {
      setbtnIsHighlight(false);
    }, 300);

    return () => {
      clearTimeout(btntimer);
    };
  }, [item]);

  const btnclasses = `${classes.button} ${btnIsHighlight ? classes.bump : ""}`;

  const numberofCartItems = item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
