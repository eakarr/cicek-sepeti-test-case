import "./BannerButton.scss";

const BannerButton = (props) => {
  const { children} = props;
  return <button className={"banner--button"}>{children}</button>;
};

export default BannerButton;
