import { useState } from "react";

import CategoryIcon from "./icon/CategoryIcon";
import CategoryTitle from "./title/CategoryTitle";
import CategoryItem from "./item/CategoryItem";
import { categories } from "../../../mocks/categories";

import "./Categories.scss";

const Categories = (props) => {
  const { categoryType, setCategoryType } = props;
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(true);

  const categoryToggleHandler = () => {
    setIsCategoriesVisible((prevState) => !prevState);
  };

  const allCategories = (
    <div className="fullwidth">
      <ul className="categories--ulist fullwidth">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            categoryType={categoryType}
            setCategoryType={() => setCategoryType(category.categoryName)}
          >
            {category.categoryName}
          </CategoryItem>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="categories container flex-dcolumn ">
      <div className="fullwidth">
        <button
          onClick={categoryToggleHandler}
          className="category-title  flex flex-acenter"
        >
          <CategoryIcon />
          <CategoryTitle />
        </button>
      </div>
      {isCategoriesVisible ? allCategories : null}
    </div>
  );
};

export default Categories;
