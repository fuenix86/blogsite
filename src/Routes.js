import React from "react";
import { Switch, Route } from "react-router-dom";

// Componenets
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Projects from "./components/MainView/Projects/Projects";
import Blog from "./components/MainView/Blog/Blog";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/Blog" component={Blog} />
    </Switch>
  );
};

export default Routes;
