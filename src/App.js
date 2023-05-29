import React, { Fragment } from "react";
import Header from "./Componenets/Layout/Header";
import Meals from "./Componenets/Meals/Meals";
import Cart from "./Componenets/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <Meals/>
    </Fragment>
  );
}

export default App;
