import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="bg-gray-500 text-black pt-5">
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Link className="flex items-center" to="/">
          <img className="h-12" src={logo} alt="PawFinds Logo" />
          <p className="ml-2 text-lg sm:text-xl">{props.title}</p>
        </Link>
      </div>
  
      {/* Contact Information and Social Links */}
      <div className="bg-gray-500 text-black py-2.5 text-center leading-6">
        <p className="text-sm sm:text-base">
          You can reach me at{" "}
          <a
            className="text-blue-600 hover:text-blue-800"
            href="mailto:kashifkzmi5@gmail.com"
          >
            kashifkzmi5@gmail.com
          </a>
        </p>
  
        {/* Social Links */}
        <p className="mt-2 flex flex-wrap justify-center space-x-4 text-sm sm:text-base">
          <a
            className="text-blue-600 hover:text-blue-800"
            href="https://www.linkedin.com/in/kashiekzmi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          <span className="text-gray-400">|</span>
          <a
            className="text-blue-600 hover:text-blue-800"
            href="https://github.com/KaShiekzmi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          <span className="text-gray-400">|</span>
          <a
            className="text-blue-600 hover:text-blue-800"
            href="https://www.instagram.com/kaxhie_x/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          <span className="text-gray-400">|</span>
          <a
            className="text-blue-600 hover:text-blue-800"
            href="https://api.whatsapp.com/qr/GXRHM7PEPNOKA1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
  
        {/* Copyright */}
        <p className="mt-4 text-xs sm:text-sm">
          &copy; 2023 Kashif Abbas Kazmi
        </p>
      </div>
    </footer>
  );
}
export default Footer