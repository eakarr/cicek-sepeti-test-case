import { LazyLoadImage } from "react-lazy-load-image-component";

const BasketIcon = () => {
  return (
    <LazyLoadImage
      src={"/assets/basket-icon.png"}
      alt={"sepet"}
      width={20}
      height={20}
    />
  );
};

export default BasketIcon;
