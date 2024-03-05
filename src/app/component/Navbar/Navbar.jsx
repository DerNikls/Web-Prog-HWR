'use client'

import Sidebar from "../Sidebar/Sidebar";
import styles from "./Navbar.module.css";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Sidebar */}
      <Sidebar/>
      <div className={styles.wrapper}>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Niklas Täge - LoRaWAN-Blog
        </motion.span>
        <div className={styles.social}>
          {/*}
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          */}
          <a href="#">
            <img src="/image/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="/image/youtube.png" alt="youtube" />
          </a>
          {/*}
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
          */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
