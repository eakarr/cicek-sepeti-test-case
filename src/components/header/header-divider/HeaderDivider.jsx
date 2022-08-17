import HeaderDividerTitle from "./title/HeaderDividerTitle";

import "./HeaderDivider.scss";

const HeaderDivider = () => {
  return (
    <div className="header--divider fullwidth flex flex-jcenter">
      <div className="container">
        <HeaderDividerTitle />
      </div>
    </div>
  );
};

export default HeaderDivider;
