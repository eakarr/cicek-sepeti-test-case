import { LazyLoadImage } from "react-lazy-load-image-component";

const SearchIcon = () => {
  return (
    <LazyLoadImage
      src="/assets/magnifying-glass-icon.png"
      alt="İmleç"
      width={19}
      height={20}
    />
  );
};

export default SearchIcon;
