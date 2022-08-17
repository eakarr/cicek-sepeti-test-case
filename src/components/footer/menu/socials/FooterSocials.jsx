import FooterSocialItem from "./item/FooterSocialItem";
import FooterConfidentials from "./confidentials/FooterConfidentials";
import FooterLogo from "./logo/FooterLogo";
import { socials } from "../../../../mocks/socials";

import "./FooterSocials.scss"

const FooterSocials = () => {
  return (
    <div className="footer--socials flex flex-dcolumn">
      <div className="footer--socials_logo">
        <FooterLogo />
      </div>
      <div className="footer--socials_icons flex flex-jbetween">
        {socials.map((social) => (
          <div key={social.id}>
            <FooterSocialItem
              url={social.url}
              target={social.target}
              relationship={social.relationship}
              source={social.source}
              name={social.name}
              width={social.width}
              height={social.height}
            />
          </div>
        ))}
      </div>
      <FooterConfidentials />
    </div>
  );
};

export default FooterSocials;
