import HeaderDivider from "../../components/header/header-divider/HeaderDivider";
import Breadcrumb from "../../components/header/breadcrumb/Breadcrumb";
import Logo from "../../components/header/logo/Logo";
import Search from "../../components/header/search/Search";
import Basket from "../../components/header/basket/Basket";

import "./HeaderContainer.scss";

const HeaderContainer = (props) => {
  const { setSearch, search, categoryType } = props;
  return (
    <header className="flex flex-acenter flex-dcolumn fullwidth">
      <div className="header--main container flex-dcolumn">
        <div className="header--main_container flex flex-acenter fullwidth">
          <Logo />
          <div className="header--desktop fullwidth">
            <Search setSearch={setSearch} search={search} />
          </div>
          <Basket />
        </div>

        <div className="header--mobile fullwidth">
          <Search />
        </div>
      </div>

      <HeaderDivider />

      <Breadcrumb categoryType={categoryType} />
    </header>
  );
};

export default HeaderContainer;
