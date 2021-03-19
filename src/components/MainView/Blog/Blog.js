import React from "react";
import * as s from "../MainView.styles";
import { motion } from "framer-motion";

const Blog = (props) => {
  const {transitions = {}} = props;
  
  return (
    <motion.div
          initial= {transitions.initial}
          animate= {transitions.animate}
          exit= {transitions.opacity}
          transition={transitions.transition}
    >
    <s.Card>
        <s.h1>Blog page</s.h1>
      </s.Card>
    </motion.div>
  );
};

export default Blog;
