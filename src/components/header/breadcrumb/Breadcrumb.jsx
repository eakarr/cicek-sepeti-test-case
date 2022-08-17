import BreadcrumbNavigation from "./navigation/BreadcrumbNavigation";

import "./Breadcrumb.scss";

const Breadcrumb = (props) => {
  const { categoryType } = props;
  return (
    <div className="header--breadcrumb container fullwidth">
      <ul className="flex">
        <li className="flex flex-jcenter flex-acenter">
          <BreadcrumbNavigation>{"Ciceksepeti Market"}</BreadcrumbNavigation>
          <span className={"header--breadcrumb-bsign"}>{">"}</span>
        </li>
        <li className="flex flex-jcenter flex-acenter">
          <BreadcrumbNavigation>{"İstanbul"}</BreadcrumbNavigation>
          <span className={"header--breadcrumb-bsign"}>{">"}</span>
        </li>
        <li className="flex flex-jcenter flex-acenter">
          <BreadcrumbNavigation>{categoryType}</BreadcrumbNavigation>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
