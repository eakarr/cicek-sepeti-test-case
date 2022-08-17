import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterSocialItem = (props) => {
  const { url, target, relationship, source, name, width, height } = props;
  return (
    <a href={url} target={target} rel={relationship}>
      <LazyLoadImage src={source} alt={name} width={width} height={height} />
    </a>
  );
};

export default FooterSocialItem;
