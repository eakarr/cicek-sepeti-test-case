import React from "react";
import BannerButton from "./button/BannerButton";
import BannerImage from "./image/BannerImage";
import BannerText from "./text/BannerText";

import "./Banner.scss"

const Banner = (props) => {
  const { source, name, text, details, background } = props;
  return (
    <div className={`banner ${background} flex flex-acenter fullwidth`}>
      <BannerImage source={source} name={name}/>
      <div className="banner--information">
        <BannerText>{text}</BannerText>
        <BannerButton>{details}</BannerButton>
      </div>
    </div>
  );
};

export default Banner;
