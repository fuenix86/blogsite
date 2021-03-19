import React from "react";
import * as s from "./MainView.styles";
import Routes from "../../Routes";

const MainView = (props) => {
  const { transitions = {} } = props;

  console.log(transitions);

  return (
    <s.MainViewContainer>
      <Routes transitions={transitions} />
    </s.MainViewContainer>
  );
};

export default MainView;