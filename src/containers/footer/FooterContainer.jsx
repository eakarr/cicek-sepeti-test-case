import FooterApplications from "../../components/footer/applications/FooterApplications";
import FooterMenu from "../../components/footer/menu/FooterMenu";
import FooterAboutUs from "../../components/footer/about-us/FooterAboutUs";
import FooterCopyRights from "../../components/footer/copyrights/FooterCopyRights";

import "./FooterContainer.scss";

const FooterContainer = () => {
  return (
    <footer className="footer flex flex-acenter flex-dcolumn fullwidth">
      <FooterApplications />
      <FooterMenu />
      <FooterAboutUs />
      <FooterCopyRights />
    </footer>
  );
};

export default FooterContainer;
