import React from "react";
import * as s from "./App.styles";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const menuItems = [
    { name: "Home", to: "/", icon: "icons/home.svg" },
    { name: "About", to: "/about", icon: "icons/info-circle.svg" },
    {
      name: "Projects",
      to: "/projects",
      icon: "icons/project-diagram.svg",
      subMenuItems: [
        // in the future, linking this to Github would be cool
        { name: "", to: "blogsite" },
        { name: "", to: "youtube-downloader" },
      ],
    },
    { name: "Blog", to: "/blog", icon: "icons/edit.svg", subMenuItems: [] },
  ];

  const fonts = {
    menu: 'Roboto'
  }

  return (
    <s.App>
      <Sidebar
        menuItems={menuItems}
        fonts = {fonts}
        />
      <MainView />
    </s.App>
  );
};

export default App;