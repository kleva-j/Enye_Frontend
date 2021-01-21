import React from "react";
import { motion } from "framer-motion";

import { Container } from "./components";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <nav></nav>
      </header>
      <Container />
    </motion.div>
  );
};

export default App;
