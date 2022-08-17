import Banners from "../../components/content/banners/Banners";
import Categories from "../../components/content/categories/Categories";
import Products from "../../components/content/products/Products";

import "./ContentContainer.scss";

const ContentContainer = (props) => {
  const { search, categoryType, setCategoryType } = props;

  return (
    <main className="content flex flex-acenter flex-dcolumn fullwidth">
      <Categories
        setCategoryType={setCategoryType}
        categoryType={categoryType}
      />
      <Products categoryType={categoryType} search={search} />
      <Banners />
    </main>
  );
};

export default ContentContainer;
