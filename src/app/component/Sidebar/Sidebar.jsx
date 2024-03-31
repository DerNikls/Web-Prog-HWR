'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./Sidebar.css";
import ToggleButton from "./toggleButton/ToggleButton";

/*
This file defines the Sidebar component, which represents a collapsible sidebar menu. It imports necessary dependencies
 such as useState, motion, Links, styles from "./Sidebar.css", and ToggleButton.
The Sidebar consists of links and a toggle button to open/close the sidebar.
*/

// Variants for sidebar animation
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Sidebar component
const Sidebar = () => {
  const [open, setOpen] = useState(false); // State for managing sidebar open/close

  return (
    <motion.div className={"sidebar"} animate={open ? "open" : "closed"}>
      <motion.div className={"bg"} variants={variants}>
        {/* Links component */}
        <Links />
      </motion.div>
      {/* ToggleButton component */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
