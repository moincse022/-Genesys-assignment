import React from "react";
import { FaBars } from "react-icons/fa";
import logo from '../../assets/Logo/Valuetainment.svg'
const Navbar = () => {
  return (
    <header className="container mx-auto p-4 bg-[#EA2127]">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center text-white">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto text-white" // Responsive height and width for the logo
          />
          <p className="ml-3 text-xl font-bold">VTMERCH</p>
        </div>
        {/* Menu Icon */}
        <div className="block md:hidden">
          <FaBars className="text-2xl"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
