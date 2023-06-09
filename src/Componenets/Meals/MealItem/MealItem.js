import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import CartContext from "../../../Store/Cart-Context";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
