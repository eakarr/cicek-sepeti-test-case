import { useContext } from "react";
import { BasketContext } from "../../../../../context/BasketContext";
import Button from "./item/Button";
import "./ProductAddToBasket.scss";

const ProductAddToBasket = (props) => {
  const { item } = props;
  const { addProduct, removeProduct, basket } = useContext(BasketContext);

  return (
    <>
      {basket[item.id]?.length > 0 ? (
        <div className="product--button-container flex flex-jbetween flex-acenter fullwidth">
          <Button
            onClickHandler={() => removeProduct(item)}
            source={"/assets/minus-icon.png"}
            name={"eksi"}
          />
          <span className="product--button-counter">
            {basket[item.id]?.length}
          </span>
          <Button
            onClickHandler={() => addProduct(item)}
            source={"/assets/plus-icon.png"}
            name={"artı"}
          />
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          className="product--button-addtobasket fullwidth flex flex-acenter flex-jcenter"
          onClick={() => addProduct(item)}
        >
          Sepete Ekle
        </div>
      )}
    </>
  );
};

export default ProductAddToBasket;
