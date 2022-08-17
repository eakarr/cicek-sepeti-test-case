import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterImage = (props) => {
  const { source, name, width, height } = props;
  return <LazyLoadImage src={source} alt={name} width={width} height={height} />;
};

export default FooterImage;
