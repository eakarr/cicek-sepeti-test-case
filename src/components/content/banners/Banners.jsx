import Banner from "./item/Banner";
import { banners } from "../../../mocks/banners";

import "./Banners.scss";

const Banners = () => {
  return (
    <div className="banners--container fullwidth flex flex-jcenter">
      <div className="banners--sub_container container flex-jbetween">
        {banners.map((banner) => (
          <div key={banner.id}>
            <Banner
              background={banner.background}
              source={banner.source}
              name={banner.name}
              text={banner.text}
              details={banner.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
