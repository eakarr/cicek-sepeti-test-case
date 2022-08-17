import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductImage = (props) => {
  const { source, name } = props;
  return <LazyLoadImage src={source} alt={name} width={242} height={244} />;
};

export default ProductImage;
