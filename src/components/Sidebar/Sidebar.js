import React from "react";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  // eslint-disable-next-line
  const { SidebarHeader = "", menuItems = [] } = props;

  const MenuItemsJSX = menuItems.map((item, index) => {
    return <s.MenuItem key={index}>{item.name}</s.MenuItem>;
  });

  return (
    <s.SidebarContainer>
      {/* <s.SidebarHeader>{SidebarHeader}</s.SidebarHeader> */}
      <s.MenuItemContainer>{MenuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
