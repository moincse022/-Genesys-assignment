import React from "react";
import icon1 from "../../Assets/Icon/quotes.svg"
import img1 from "../../assets/image/img (5).png"
const MissionSection = () => {
  return (
    <div className="mission bg-[#EA2127] ">
      <div className="mission-container flex flex-col lg:flex-row  justify-between max-w-6xl mx-auto px-4">
        {/* Mission Title */}
        <div className="mission-title  lg:text-left mb-10 lg:mb-0">
          <img
            src={icon1}
            alt="Quotes Icon"
            className="mission-title-img  lg:mx-0 w-28"
          />
          <p className="mission-text text-2xl text-white -mt-10">
            Our mission is to enlighten, entertain
            <br />
            and empower current and future
            <br />
            leaders around the world.
          </p>
        </div>

        {/* Mission Image */}
        <div className="mission-img flex  lg:justify-end">
          <img
            src={img1}
            alt="Mission"
            className="mission-img-1 w-72  h-auto mt-4 lg:w-64 lg:-mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
