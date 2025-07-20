import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact Me", to: "contact" },
  ];

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-2xl font-semibold text-teal-400">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Chitransh's Portfolio
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  activeClass="text-blue-400"
                  className="block py-1 px-2 cursor-pointer hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)} 
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.techgenie.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 px-2 hover:text-blue-500 transition"
              >
                My Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
