import "./ProductShipping.scss"

const ProductShipping = (props) => {
  const { shipping } = props;
  return <p className={"product--shipping"}>{shipping}</p>;
};

export default ProductShipping;
