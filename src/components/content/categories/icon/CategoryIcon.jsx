import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoryIcon = () => {
  return (
    <LazyLoadImage
      src={"/assets/burger-icon.png"}
      alt={"Kategori açma kapama butonu"}
      width={17}
      height={16}
    />
  );
};

export default CategoryIcon;
