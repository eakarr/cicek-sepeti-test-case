import SearchButton from "./button/SearchButton";
import SearchIcon from "./icon/SearchIcon";
import SearchInput from "./input/SearchInput";

import "./Search.scss";

const Search = (props) => {
  const { setSearch,search } = props;
  return (
    <div className="header--search-bar flex flex-acenter">
      <SearchIcon />
      <SearchInput value={search} onChange={setSearch} />
      <SearchButton />
    </div>
  );
};

export default Search;
