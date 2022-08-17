import React from "react";
import FooterImage from "./image/FooterImage";
import FooterText from "./text/FooterText";

import "./FooterApplications.scss"

const FooterApplications = () => {
  return (
    <div className="footer--all_apps container flex-aend flex-jcenter">
      <FooterImage
        source="/assets/phones.png"
        name="telefonlar"
        width={352}
        height={360}
      />
      <div className="footer--apps flex flex-dcolumn flex-jcenter fullheight">
        <div className="footer--apps_info--container flex flex-acenter flex-jbetween">
          <FooterImage
            source="/assets/qrcode.png"
            name="qr kod"
            width={60}
            height={60}
          />
          <div className="flex flex-dcolumn">
            <FooterText
              text={"Çiçek Sepeti Mobil Uygulamayı İndirin"}
              styles={"footer--apps_info1"}
            />
            <FooterText
              text={"Mobil Uygulamayı QR Kod ile İndirin"}
              styles={"footer--apps_info2"}
            />
          </div>
        </div>
        <div className="flex flex-jbetween">
          <div className="footer--gplay">
            <FooterImage
              source="/assets/google-play.png"
              name="google play uygulaması"
              width={176}
              height={52}
            />
          </div>
          <FooterImage
            source="/assets/app-store.png"
            name="app store uygulaması"
            width={176}
            height={52}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterApplications;
