import React, { useState } from "react";
import Header from "./Componenets/Layout/Header";
import Meals from "./Componenets/Meals/Meals";
import Cart from "./Componenets/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onClick={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
