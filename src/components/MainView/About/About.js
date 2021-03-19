import React from "react";
import * as s from "../MainView.styles";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
          initial= {{ opacity: 0, scale: 0.98, y: -50 }}
          animate= {{ opacity: 1, scale: 1, y: 0 }}
          exit= {{opacity: 0}}
          transition={{ ease: "easeOut", duration: 0.5 }}>
      <s.Card>
        <s.h1>About page</s.h1>
        {/* show what tools are used in making this with a grid of cards, as well as other things I commonly use */}
      </s.Card>
    </motion.div>
  );
};

export default About;
