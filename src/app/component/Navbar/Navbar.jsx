'use client'
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { motion } from 'framer-motion';

/*
This file defines the Navbar component, which represents the navigation bar of the application. It imports necessary dependencies such as Sidebar from "../Sidebar/Sidebar", styles from "./Navbar.css", and motion from 'framer-motion'.

The Navbar consists of a sidebar, a title, and social media icons.
*/

const Navbar = () => {
  return (
    <div className={"navbar"}>
      {/* Sidebar */}
      <Sidebar/> {/* Rendering the Sidebar component */}
      <div className={"wrapper"}>{/* Wrapper for the title and social icons */}
        {/* Title with motion animation from framer-motion*/}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Niklas Täge - LoRaWAN-Blog
        </motion.span>
        <div className={"social"}>
          <a href="https://www.instagram.com/dernikls/">
            <img src="/image/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.youtube.com/@DerNikls/featured">
            <img src="/image/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
