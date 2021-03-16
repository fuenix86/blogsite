import React from "react";
import * as s from "./App.styles";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const SidebarHeader = 'origami-matrix'; 
  // const menuItems = ["Home", "About", "Projects", "Blog"];
  const menuItems = [
    {name: 'Home', to: '/', icon: '', subMenuItems: []},
    {name: 'About', to: '/', icon: '', subMenuItems: []},
    {name: 'Projects', to: '/', icon: '', subMenuItems: []},
    {name: 'Blog', to: '/', icon: '', subMenuItems: []}
  ];

  return (
    <s.App>
      <Sidebar
        SidebarHeader={SidebarHeader}
        menuItems={menuItems}
        />
      <MainView />
    </s.App>
  );
};

export default App;