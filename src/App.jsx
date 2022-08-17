import { useState } from "react";
import BasketContextProvider from "./context/BasketContext";

import ContentContainer from "./containers/content/ContentContainer";
import FooterContainer from "./containers/footer/FooterContainer";
import HeaderContainer from "./containers/header/HeaderContainer";

function App() {
  const [search, setSearch] = useState("");
  const [categoryType, setCategoryType] = useState("Tüm Kategoriler");

  return (
    <BasketContextProvider>
      <div className="flex flex-acenter flex-dcolumn fullwidth">
        <HeaderContainer
          setSearch={setSearch}
          search={search}
          categoryType={categoryType}
        />
        <ContentContainer
          search={search}
          setCategoryType={setCategoryType}
          categoryType={categoryType}
        />
        <FooterContainer />
      </div>
    </BasketContextProvider>
  );
}

export default App;
