import "./BannerText.scss";

const BannerText = (props) => {
  const { children } = props;
  return <p className={"banner--text"}>{children}</p>;
};

export default BannerText;
