import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine, RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ABOUT, CONTACTS, HOME } from '../ConstantLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col lg:items-start flex-wrap gap-5 lg:flex-row justify-around">
        <div className="footer-section">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Email: bosianil09@gmail.com</p>
          <p>Phone: +91 7893083018</p>
        </div>

        <div className="footer-section">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul>
            <li><Link onClick={() => scrollTo(0,0)} to={HOME} className="text-gray-300 hover:text-gray-400">Home</Link></li>
            <li><Link onClick={() => scrollTo(0,0)} to={ABOUT} className="text-gray-300 hover:text-gray-400">About Us</Link></li>
            <li><Link onClick={() => scrollTo(0,0)} to={CONTACTS} className="text-gray-300 hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400">
            <RiTwitterXFill size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaInstagram size={20} />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 MyContact. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
