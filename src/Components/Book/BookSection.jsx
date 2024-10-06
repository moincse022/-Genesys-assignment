import React from "react";
 import img1 from '../../assets/image/Enemies.png'
 import img2 from '../../assets/image/img (8).png'
 import img3 from '../../assets/image/pat-signature White 1.png'
const BookSection = () => {
  return (
    <div className="book-section bg-black py-10">
      <div className="book-container flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto ">
        {/* Book Title Section */}
        <div className="book-title text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="title text-3xl font-bold text-white mb-4">Patrick Bet-David's</h2>
          <p className="subTitle text-5xl bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent">Signed</p>

          <p className="subTitle text-5xl bg-gradient-to-b from-red-600 to-red-400 bg-clip-text text-transparent mb-4">Collection</p>
          <button className="btn bg-blue-500 text-white px-6 py-2 rounded-lg">
            SHOP NOW <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
          <img
            src={img3}
            alt="Signature"
            className="book-title-img mt-6 mx-auto text-xl lg:mx-0"
          />
        </div>

        {/* Book Images Section */}
        <div className="book-section-img flex space-x-6">
          <div className="book-subsection-img flex space-x-6">
            <img
              src={img1}
              alt="book"
              className="img-1"
              style={{ width: "150px", height: "250px" }}
            />
            <img
              src={img2}
              alt="book"
              className="img-2"
              style={{ width: "150px", height: "235px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
