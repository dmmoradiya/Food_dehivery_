import React from "react";
import { Fragment } from "react";
import MealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Delhivery</h2>
        <HeaderCartButton  onClick={props.onClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage}></img>
      </div>
    </Fragment>
  );
};

export default Header;
