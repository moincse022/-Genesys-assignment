import React from "react";
import logo1 from '../../assets/Logo/Valuetainment_Logo_2018 1.png'
import img1 from '../../assets/Icon/facebook (4).svg'
import img2 from '../../assets/Icon/linkedin (3).svg'
import img3 from '../../assets/Icon/twitter (4).svg'
import img4 from '../../assets/Icon/instagram-logo (1).svg'
import icon1 from '../../assets/Icon/visa 1.svg'
import icon2 from '../../assets/Icon/apple-pay 1.svg'
import icon3 from '../../assets/Icon/american-express (1) 1.svg'
import icon4 from '../../assets/Icon/visa 2.svg'
import icon5 from '../../assets/Icon/amex 1.svg'
import icon6 from '../../assets/Icon/paypal 1.svg'
import icon7 from '../../assets/Icon/diners-club 1.svg'
const Footer = () => {
  return (
    <footer className="footer bg-[#000] text-white py-10">
      <div className="footer-container max-w-6xl mx-auto px-4">
        {/* Footer Logo Section */}
        <div className="footer-logo flex flex-col  lg:flex-row lg:items-center lg:justify-start space-x-4 mb-6">
          <img
            src={logo1}
            alt="Logo"
            className="logo w-16 h-auto"
          />
          <h2 className="logo-text text-3xl font-bold mt-4 lg:mt-0">VTMERCH</h2>
        </div>

        <hr className="footer-hr border-gray-700 mb-8" />

        {/* Subscription and Links Section */}
        <div className="footer-subscription flex flex-col lg:flex-row justify-between items-start  space-y-8 lg:space-y-0">
          {/* Subscription Section */}
          <div className="footer-subscribe  lg:w-1/2">
            <p className="mb-4 text-2xl">
              Subscribe and be the first to receive <br/> notifications about our
              upcoming releases <br/> and the latest news.
            </p>
            <form className="subscribe-form flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="p-3 w-80 lg:w-96 border border-white-600 bg-black rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="p-3 w-80 lg:w-96 bg-white text-gray-900 rounded-md mt-4 hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 lg:w-1/2">
            {/* Customer Services Column */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-4">Customer Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Search</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Track Order</a></li>
              </ul>
            </div>

            {/* Products Column */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Featured Products</a></li>
                <li><a href="#" className="hover:underline">Bestseller</a></li>
                <li><a href="#" className="hover:underline">Latest Product</a></li>
                <li><a href="#" className="hover:underline">All Collections</a></li>
                <li><a href="#" className="hover:underline">All Products</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p>Available between 9 AM - 5 PM.</p>
              <p>Reply to answer your questions.</p>
              <p>Phone: 0130467899</p>
              <p>Email: support@vtmerch.com</p>
              <div className="social-icons flex space-x-4 mt-4">
                <a href="#"><img src={img1} alt="Facebook" className="w-6 h-6" /></a>
                <a href="#"><img src={img2} alt="LinkedIn" className="w-6 h-6" /></a>
                <a href="#"><img src={img3} alt="Twitter" className="w-6 h-6" /></a>
                <a href="#"><img src={img4} alt="Instagram" className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom lg:flex lg:justify-around gap-48 lg:items-center  text-center py-4 mt-10">
        <p>© 2024 VTMerch Store. All rights reserved.</p>
        <div className="payment-icons flex justify-center space-x-4 mt-4">
          <img src={icon1} alt="Visa" className="w-10 h-auto" />
          <img src={icon2}  alt="Apple Pay" className="w-10 h-auto" />
          <img src={icon3} alt="Amex" className="w-10 h-auto" />
          <img src={icon4} alt="Paypal" className="w-10 h-auto" />
          <img src={icon5} alt="Amex" className="w-10 h-auto" />
          <img src={icon6} alt="Paypal" className="w-10 h-auto" />
          <img src={icon7} alt="Diners Club" className="w-10 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
