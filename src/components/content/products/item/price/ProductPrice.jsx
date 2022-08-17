import "./ProductPrice.scss"

const ProductPrice = (props) => {
  const { price } = props;
  return <p className={"product--price"}>{price}</p>;
};

export default ProductPrice;
