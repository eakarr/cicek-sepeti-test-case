import ProductImage from "./image/ProductImage";
import ProductDescription from "./description/ProductDescription";
import ProductShipping from "./shipping/ProductShipping";
import ProductPrice from "./price/ProductPrice";
import ProductAddToBasket from "./button/ProductAddToBasket";

import "./Product.scss";

const Product = (props) => {
  const { source, name, description, shipping, price, item } = props;

  return (
    <>
      <div className="product flex flex-acenter flex-dcolumn">
        <ProductImage source={source} name={name} />
        <div className="product--information flex flex-dcolumn fullwidth">
          <ProductDescription description={description} />
          <ProductShipping shipping={shipping} />
          <ProductPrice price={price + " TL"} />
        </div>
        <ProductAddToBasket item={item} />
      </div>
    </>
  );
};

export default Product;
