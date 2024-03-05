import { motion } from "framer-motion";
import styles from "../Sidebar.module.css";

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
  const items_dis = ["Homepage", "Überblick", "Technik", "Nutzen", "Blog", "Maps", "Impressum"];
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
      <motion.div className={styles.links} variants={variants}>
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
