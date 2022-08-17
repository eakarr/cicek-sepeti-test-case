import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterLogo = () => {
  return (
    <a href={"#"}>
      <LazyLoadImage
        src={"/assets/company-logo.png"}
        alt={"Çiçek Sepeti"}
        width={209}
        height={41}
      />
    </a>
  );
};

export default FooterLogo;
