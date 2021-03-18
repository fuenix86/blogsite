import React, { useState } from "react";
import * as s from "./Sidebar.styles";


const Sidebar = (props) => {
  const {
    menuItems = [],
    fonts = {
      menu: "",
    },
  } = props;
  
  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name)
  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name)
  }

  const MenuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name

    return (
      <s.MenuItem 
      key={index} 
      font={fonts.menu} 
      selected={isItemSelected}
      onClick={() => handleMenuItemClick(item.name)}
      >
        <s.Text>{item.name}</s.Text>
        {/* <s.Icon src={item.icon}></s.Icon> */}
      </s.MenuItem>
    );
  });


  return (
    <s.SidebarContainer>
      <s.MenuItemContainer>{MenuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
