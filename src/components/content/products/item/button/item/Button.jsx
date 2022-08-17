import "./Button.scss";

const Button = (props) => {
  const { onClickHandler, source, name } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      className="product--button flex flex-acenter"
      onClick={onClickHandler}
    >
      <img src={source} alt={name} width={30} height={30} />
    </div>
  );
};

export default Button;
