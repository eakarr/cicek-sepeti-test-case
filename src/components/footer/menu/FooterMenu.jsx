import FooterNavigationItems from "./items/FooterNavigationItems";
import FooterSocials from "./socials/FooterSocials";

import "./FooterMenu.scss"

const FooterMenu = () => {
  return (
    <div className="footer--menu container">
      <FooterSocials />
      <FooterNavigationItems />
    </div>
  );
};

export default FooterMenu;
