import { navigationItems } from "../../../../mocks/navigation-items";

import "./FooterNavigationItems.scss";

const FooterNavigationItems = () => {
  return (
    <div className="footer--socials_nav flex flex-jbetween fullwidth">
      {navigationItems.map((item) => (
        <nav
          className="footer--socials_navitem flex flex-dcolumn flex-acenter"
          key={item.id}
        >
          <p>{item.title}</p>
          <ul>
            {item.contents.map((content) => (
              <li
                className="footer--socials_navlist_item flex flex-acenter flex-jcenter"
                key={Math.random()}
              >
                <a href="#" className="flex flex-acenter flex-jcenter">
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default FooterNavigationItems;
