import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Toast.scss";

const Toast = (props) => {
  const { totalPrice } = props;
  const maxValue = 500;
  const currentValue = maxValue - totalPrice;
  const percentageValue = 100 - (currentValue / maxValue) * 100;

  return (
    <div
      style={
        percentageValue > 100
          ? { backgroundColor: "green" }
          : { backgroundColor: "#f54257" }
      }
      className="toast flex fullwidth"
    >
      <div className="toast--container flex flex-acenter flex-jcenter flex-dcolumn">
        <div className="toast--information flex fullwidth flex-acenter">
          {currentValue > 0 ? (
            <>
              <LazyLoadImage
                src="/assets/lightning.png"
                alt="Yıldırım"
                width={8}
                height={13}
              />
              <span>{(maxValue - totalPrice).toFixed(2)} TL</span>
              <p>ürün daha ekleyin kargo bedava</p>
            </>
          ) : (
            <p>Kargo Bedava</p>
          )}
        </div>
        <div className="toast--progression fullwidth">
          <div
            style={{
              height: "5px",
              borderRadius: "10px",
              backgroundColor: "#ffce00",
              width: `${percentageValue > 100 ? 100 : percentageValue}%`,
            }}
          ></div>
          <span
            style={
              percentageValue > 100
                ? { borderBottomColor: "green" }
                : { borderBottomColor: "#f54257" }
            }
            className={"toast--arrow"}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
