import React from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/image/Enemies.png';
import img2 from '../../assets/image/img (8).png';
import img3 from '../../assets/image/pat-signature White 1.png';
import { FaArrowRight } from "react-icons/fa6";

const BookSection = () => {
  return (
    <div className="book-section bg-black py-10">
      <div className="book-container flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Book Title Section */}
        <motion.div
          className="book-title text-center lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="title text-3xl font-bold text-white mb-4">Patrick Bet-David's</h2>
          <p className="subTitle text-5xl bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent">Signed</p>
          <p className="subTitle text-5xl bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent mb-4">Collection</p>
          <motion.button
            className="btn bg-white text-black px-6 py-2 rounded-lg mx-auto lg:m-0 md:m-0 flex items-center space-x-4 gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP NOW <FaArrowRight />
          </motion.button>
          <motion.img
            src={img3}
            alt="Signature"
            className="book-title-img mt-6 h-44 mx-auto text-xl lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        {/* Book Images Section */}
        <motion.div
          className="book-section-img flex space-x-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={img1}
            alt="book"
            className="img-1"
            style={{ width: "150px", height: "250px" }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={img2}
            alt="book"
            className="img-2"
            style={{ width: "150px", height: "235px" }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BookSection;
