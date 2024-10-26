"use client";
import Link from "next/link";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header: React.FC<{ onRegisterClick: () => void }> = ({
  onRegisterClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-transparent shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-2xl text-gray-700 mr-2">
            <FaGraduationCap />
          </span>
          <span className="text-xl font-bold text-gray-500">Educate</span>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-4 gap-5">
          <Link href="#home" className="text-gray-500 font-serif font-bold hover:text-pink-400">
            Home
          </Link>
          <Link href="#about" className="text-gray-500 font-serif font-bold hover:text-pink-400">
            About
          </Link>
          <Link href="#courses" className="text-gray-500 font-serif font-bold hover:text-pink-400">
            Courses
          </Link>
          <Link href="#contact" className="text-gray-500 font-serif font-bold hover:text-pink-400">
            Contact
          </Link>
        </div>

        {/* Register Button for Desktop */}
        <button
          onClick={onRegisterClick}
          className="hidden md:block bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
        >
          Register Now
        </button>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-900 focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-slate-900" />
          ) : (
            <FaBars size={24} className="text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-orange-300 p-4 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none mb-4"
        >
          <FaTimes size={24} className="text-black" />
        </button>
        <nav className="flex flex-col space-y-14 mt-10 mb-10 justify-center ml-20">
          <Link
            href="#home"
            className="text-black hover:text-gray-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-black hover:text-gray-600"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#courses"
            className="text-black hover:text-gray-600"
            onClick={toggleMenu}
          >
            Courses
          </Link>
          <Link
            href="#contact"
            className="text-black hover:text-gray-600"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Register Button in Mobile Menu */}
        <button
          onClick={onRegisterClick}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400 transition mt-4 ml-16"
        >
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Header;
