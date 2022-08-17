import React from "react";

const SearchInput = (props) => {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={"header--search-bar_input"}
      placeholder={"Ürün Ara"}
    />
  );
};

export default SearchInput;
