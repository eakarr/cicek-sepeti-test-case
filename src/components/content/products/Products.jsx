import Product from "./item/Product";
import { products } from "../../../mocks/products";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Products.scss";

const Products = (props) => {
  const { categoryType, search } = props;

  const categoryFilteredProducts = products.filter((product) => {
    if (categoryType === "Tüm Kategoriler") {
      return product;
    } else {
      return product.type === categoryType;
    }
  });

  const searchFilteredProducts = categoryFilteredProducts.filter((product) => {
    if (search.length > 2) {
      return (
        product.description
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) > -1
      );
    } else {
      return true;
    }
  });

  return (
    <div className="products container flex-dcolumn fullwidth">
      <div className="flex flex-acenter fullwidth">
        <div className="products--title flex flex-acenter">
          <LazyLoadImage
            src="/assets/green-leaf-icon.png"
            alt="Yeşil yaprak"
            width={22}
            height={17}
          />
          <h3>{categoryType}</h3>
        </div>
      </div>
      <div className="products--container flex fullwidth">
        {searchFilteredProducts.map((product) => (
          <div key={product.id}>
            <Product
              source={product.imgSource}
              name={product.productName}
              description={product.description}
              shipping={product.shipping}
              price={product.price}
              item={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
