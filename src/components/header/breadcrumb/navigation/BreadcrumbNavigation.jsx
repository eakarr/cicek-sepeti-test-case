const BreadcrumbNavigation = (props) => {
  const { children } = props;
  return (
    <a href={"#"} className={"header--breadcrumb-navigation"}>
      {children}
    </a>
  );
};

export default BreadcrumbNavigation;
