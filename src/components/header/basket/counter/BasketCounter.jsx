const BasketCounter = (props) => {
  const { count } = props;
  return (
    <div className={"header--basket-circle flex flex-acenter flex-jcenter"}>
      <span className={"header--basket-count"}>{count}</span>
    </div>
  );
};

export default BasketCounter;
