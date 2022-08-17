import { BasketContext } from "../../../context/BasketContext";
import { useContext, useState } from "react";

import BasketCounter from "./counter/BasketCounter";
import BasketIcon from "./icon/BasketIcon";

import "./Basket.scss";
import Toast from "../toast/Toast";

const Basket = () => {
  const { count, totalPrice } = useContext(BasketContext);
  const [isToastVisible, setIsToastVisible] = useState(true);
  const toastHandler = () => {
    setIsToastVisible((prevState) => !prevState);
  };

  return (
    <button
      onClick={toastHandler}
      className="header--basket flex flex-jcenter flex-acenter"
    >
      <BasketIcon />
      <span>{"Sepetim"}</span>
      <BasketCounter count={count} />
      {isToastVisible && <Toast totalPrice={totalPrice} />}
    </button>
  );
};

export default Basket;
