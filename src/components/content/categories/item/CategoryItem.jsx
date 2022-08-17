import "./CategoryItem.scss";

const CategoryItem = (props) => {
  const { children, setCategoryType, categoryType } = props;
  return (
    <li
      onClick={setCategoryType}
      className={
        categoryType === children
          ? "categories--ulist-item active flex flex-acenter flex-jcenter"
          : "categories--ulist-item flex flex-acenter flex-jcenter"
      }
    >
      <a
        href="#"
        className={
          categoryType === children
            ? "categories--ulist-item_navigation active fullwidth fullheight flex flex-jcenter flex-acenter"
            : "categories--ulist-item_navigation fullwidth fullheight flex flex-jcenter flex-acenter"
        }
      >
        {children}
      </a>
    </li>
  );
};

export default CategoryItem;
