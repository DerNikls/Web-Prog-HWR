import { motion } from "framer-motion";

/*
This file defines the ToggleButton component, which represents a button used to toggle the sidebar. It imports
necessary dependencies such as motion from 'framer-motion'.
The ToggleButton component consists of an SVG icon that changes shape based on the state of the sidebar.
*/

// ToggleButton component
const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
        {/* SVG icon for toggle button */}
      <svg width="23" height="23" viewBox="0 0 23 23">
          {/* Path for the first line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
          {/* Path for the second line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
          {/* Path for the third line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
