import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Componenets
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Projects from "./components/MainView/Projects/Projects";
import Blog from "./components/MainView/Blog/Blog";

const Routes = (props) => {
  const {transitions = {}} = props;

  console.log(transitions);
  return (
    <AnimatePresence>
        <Switch>
          <Route exact path="/" component={() => <Home transitions={transitions} />} />
          <Route path="/about" component={()=> <About transitions={transitions} />}/>
          <Route path="/projects" component={()=> <Projects transitions={transitions}/>}/>
          <Route path="/Blog" component={()=> <Blog transitions={transitions}/>}/>
        </Switch>
    </AnimatePresence>
  );
};

export default Routes;
