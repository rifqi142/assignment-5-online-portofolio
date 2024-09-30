import React from "react";
import { useState, useEffect } from "react";
import { navbarLinks } from "../constants";
import { Link } from "react-router-dom";
import "./style/style.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarShadow, setIsNavbarShadow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsNavbarShadow(true);
    } else {
      setIsNavbarShadow(false);
    }
  };

  const handleLinkClick = (linkKey) => {
    setActiveLink(linkKey);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <nav
        className={`pt-5 pb-3 top-0 w-full z-50 sticky navbar-color transition-shadow duration-300 ${
          isNavbarShadow ? "shadow-lg" : ""
        }`}
        id="navbar"
      >
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gradient">
            &lt;Rifqi /&gt;
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex h-full gap-4 text-white">
            {navbarLinks.map((link) => (
              <li className="group relative" key={link.key}>
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.key)}
                  className={`text-xl md:text-lg font-bold pb-1.5 transition-all duration-300 hover:text-blue-500 ${
                    activeLink === link.key ? "text-blue-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  className={`block h-[2px] bg-blue-500 absolute bottom-0 left-0 transition-all duration-300 ${
                    activeLink === link.key
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <img
              src="assets/icon-menu.svg"
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        <hr className="mt-3 border-gray-600" />

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden navbar-color relative left-0 w-full text-white transition-all duration-300 ease-in-out px-5 z-50 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
          style={{ display: isMobileMenuOpen ? "block" : "none" }}
        >
          {navbarLinks.map((link) => (
            <li
              className="py-3 font-bold"
              key={link.key}
              onClick={() => handleLinkClick(link.key)}
            >
              <Link
                to={link.path}
                className={`navbar-color relative left-0 w-full text-white transition-all duration-300 ease-in-out px-5 z-50 ${
                  activeLink === link.key ? "text-blue-500" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
