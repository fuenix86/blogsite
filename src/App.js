import React from "react";
import * as s from "./App.styles";
import * as Colors from "./colors";

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
        // I'll need to design what this renders first
        { name: "", to: "blogsite" },
        { name: "", to: "youtube-downloader" },
      ],
    },
    { name: "Blog", to: "/blog", icon: "icons/edit.svg", subMenuItems: [] },
  ];

  return (
    <s.App>
      <Sidebar menuItems={menuItems} colors={Colors.Default} />
      <MainView />
    </s.App>
  );
};

export default App;