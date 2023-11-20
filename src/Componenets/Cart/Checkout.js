import React, { useRef, useState } from "react";
import { Fragment } from "react";
import Classes from "./Checkout.module.css";

const Checkout = (props) => {
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 6;

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameinputRef = useRef();
  const streetinputRef = useRef();
  const postalinputRef = useRef();
  const cityinputRef = useRef();

  const onConfirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameinputRef.current.value;
    const enteredStreet = streetinputRef.current.value;
    const enteredPostal = postalinputRef.current.value;
    const enteredCity = cityinputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({ name:enteredName, Street:enteredStreet, postalCode:enteredPostal, city:enteredCity });
  };

  const nameInputClass = `${Classes.control} ${
    !formInputValidity.name ? Classes.invalid : ""
  }`;
  const streetInputClass = `${Classes.control} ${
    !formInputValidity.street ? Classes.invalid : ""
  }`;
  const postalInputClass = `${Classes.control} ${
    !formInputValidity.postal ? Classes.invalid : ""
  }`;
  const cityInputClass = `${Classes.control} ${
    !formInputValidity.city ? Classes.invalid : ""
  }`;

  return (
    <Fragment>
      <form onSubmit={onConfirmHandler} className={Classes.form}>
        <div className={nameInputClass}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameinputRef}></input>
          {!formInputValidity.name && <p>Name Should Not be Empty!</p>}
        </div>
        <div className={streetInputClass}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetinputRef}></input>
          {!formInputValidity.street && <p>Street Should Not be Empty!</p>}
        </div>
        <div className={postalInputClass}>
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" id="postalCode" ref={postalinputRef}></input>
          {!formInputValidity.postal && <p>PostalCode Must be 6 Chars!</p>}
        </div>
        <div className={cityInputClass}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityinputRef}></input>
          {!formInputValidity.city && <p>City Should Not be Empty!</p>}
        </div>
        <div className={Classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={Classes.submit}>Confirm</button>
        </div>
      </form>
    </Fragment>
  );
};
export default Checkout;
