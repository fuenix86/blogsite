import React from "react";
import * as s from "../MainView.styles";
import { motion } from "framer-motion";

const Home = (props) => {
  const {transitions = {}} = props;
  
  return (
    <motion.div
          initial= {transitions.initial}
          animate= {transitions.animate}
          exit= {transitions.opacity}
          transition={transitions.transition}
    >
    <s.Card>
        <s.h1>Welcome to my landing page!</s.h1>
        <s.p>Phew... it took a bit to get this working.</s.p>
        {/* <s.p>
          I'm not too sure on what I'm going to do with this website, other than
          linking to Github projects and showing off my design skills. I do think
          this looks very pretty.
        </s.p>
        <s.p>
          Other than that, I think this will be a very nice blog/landing page in
          the future, which I think is good to have.
        </s.p> */}
      </s.Card>
    </motion.div>
  );
};

export default Home;
