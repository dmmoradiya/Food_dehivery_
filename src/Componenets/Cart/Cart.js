import React, { useContext, useState } from "react";
import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [didSend, setDidSend] = useState(false);

  const CartCtx = useContext(CartContext);
  const totalAmount = CartCtx.amount.toFixed(2);
  const hasItem = CartCtx.item.length > 0;

  const removeCartItem = (id) => {
    CartCtx.removeItem(id);
  };
  const addCartItem = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };

  const onOrderHandler = () => {
    setIsCheckout(true);
  };

  const onFormSubmitHandler = (userData) => {
    setIsSending(true);
    fetch("https://react-http-dbf05-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ user: userData, OrderedItems: CartCtx.item }),
    });
    setIsSending(false);
    setDidSend(true);
    CartCtx.clearCart();
  };

  const Cartitem = (
    <ul className={classes["cart-items"]}>
      {CartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItem.bind(null, item.id)}
          onAdd={addCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  const ModalActions = () => {
    return (
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={onOrderHandler}>
            Order
          </button>
        )}
      </div>
    );
  };

  const cartModalContent = (
    <Fragment>
      {Cartitem}
      <div className={classes.total}>
        <span>total</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={onFormSubmitHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && <ModalActions />}
    </Fragment>
  );

  const isSendingHandler = <p>Sending Order Details..</p>;
  const didSendHandler = (
    <Fragment>
      <p>Order Palaced Successfully.</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onclose={props.onClose}>
      {!isSending && !didSend && cartModalContent}
      {isSending && isSendingHandler}
      {!isSending && didSend && didSendHandler}
    </Modal>
  );
};
export default Cart;
