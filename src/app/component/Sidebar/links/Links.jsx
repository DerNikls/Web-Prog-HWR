import { motion } from "framer-motion";
import "../Sidebar.css";

/*
This file defines the Links component, which represents a list of navigation links. It imports necessary dependencies
 such as motion from 'framer-motion' and CSS styles from "../Sidebar.css".
The Links component consists of a list of navigation links with motion animations.
*/

// Variants for animation again
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  // Array of displayed items and their corresponding routes
  const items_dis = ["Homepage", "Überblick", "Technik", "Nutzen", "Blog", "Maps", "Impressum"];
  // later to change the URL text but still keeps the german language displayed
  const itemMapping = {
    Homepage: "/",
    Überblick: "overview",
    Technik: "technical",
    Nutzen: "use-case",
    Blog: "blog",
    Maps: "maps",
    Impressum: "impressum",
  };

  return (
      <motion.div className={"links"} variants={variants}>
        {/* Mapping through items to render each link */}
        {items_dis.map((item) => (
            <motion.a
                href={itemMapping[item]}
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
        ))}
      </motion.div>
  );
};

export default Links;
