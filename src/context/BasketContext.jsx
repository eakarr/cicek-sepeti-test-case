import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basket, setBasket] = useState({});

  const addProduct = (product) => {
    const updatedBasket = { ...basket };

    if (updatedBasket[product.id]) {
      const newArray = [...updatedBasket[product.id]];
      newArray.push(product);
      updatedBasket[product.id] = newArray;
    } else {
      updatedBasket[product.id] = [product];
    }

    setTotalPrice((prevState) => prevState + product.price);
    setBasket(updatedBasket);
    setCount(
      Object.values(updatedBasket).reduce(
        (accumulated, current) => accumulated + current.length,
        0
      )
    );
  };

  const removeProduct = (product) => {
    const updatedBasket = { ...basket };

    const newArray = [...updatedBasket[product.id]];
    newArray.splice(0, 1);
    updatedBasket[product.id] = newArray;

    setTotalPrice((prevState) => prevState - product.price);
    setBasket(updatedBasket);
    setCount(
      Object.values(updatedBasket).reduce(
        (accumulated, current) => accumulated + current.length,
        0
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{ basket, totalPrice, addProduct, removeProduct, count }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
