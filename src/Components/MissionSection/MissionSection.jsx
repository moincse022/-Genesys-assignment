import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../Assets/Icon/quotes.svg";
import img1 from "../../assets/image/img (5).png";

const MissionSection = () => {
  return (
    <div className="mission bg-[#EA2127] ">
      <div className="mission-container flex flex-col lg:flex-row justify-between max-w-6xl mx-auto px-4">
        {/* Mission Title */}
        <motion.div
          className="mission-title lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={icon1}
            alt="Quotes Icon"
            className="mission-title-img lg:mx-0 w-28"
            whileHover={{ scale: 1.1 }}
          />
          <motion.p
            className="mission-text text-2xl text-white -mt-10"
            whileHover={{ opacity: 0.8 }}
          >
            Our mission is to enlighten, entertain
            <br />
            and empower current and future
            <br />
            leaders around the world.
          </motion.p>
        </motion.div>

        {/* Mission Image */}
        <motion.div
          className="mission-img flex lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={img1}
            alt="Mission"
            className="mission-img-1 w-72 h-auto mt-4 lg:w-70 lg:-mt-20"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;
