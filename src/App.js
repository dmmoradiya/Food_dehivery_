import React, { Fragment, useState } from "react";
import Header from "./Componenets/Layout/Header";
import Meals from "./Componenets/Meals/Meals";
import Cart from "./Componenets/Cart/Cart";

function App() {

  const [cartIsShown , setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }
  const hideCart =()=>{
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCart}/>}
      <Header onClick={showCart} />
      <Meals/>
    </Fragment>
  );
}

export default App;
