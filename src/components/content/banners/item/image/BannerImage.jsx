import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerImage = (props) => {
  const { source, name } = props;
  return <LazyLoadImage src={source} alt={name} width={167} height={133} />;
};

export default BannerImage;
