import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = () => {
  return (
    <a href={"#"} className={"flex"}>
      <LazyLoadImage
        src={"/assets/company-logo.png"}
        alt={"ÇiçekSepeti"}
        width={164}
        height={32}
      />
    </a>
  );
};

export default Logo;
