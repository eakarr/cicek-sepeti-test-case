import "./ProductDescription.scss"

const ProductDescription = (props) => {
  const { description } = props;
  return <p className={"product--description"}>{description}</p>;
};

export default ProductDescription;
