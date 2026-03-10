import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (path, name) => (
    <div className="relative group">
      <Link to={path}>{name}</Link>

      {/* underline animation */}
      <span
        className="absolute left-0 -bottom-2 h-[2px] bg-red-500 w-0 transition-all duration-300 group-hover:w-full"
      ></span>
    </div>
  );

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      
      ${
        isHome
          ? hovered || scrolled
            ? "bg-[#132F4B] shadow-md"
            : "bg-transparent"
          : "bg-[#132F4B] shadow-md"
      }`}
    >
      <div
        className={`max-w-[1600px] mx-auto flex items-center px-20 py-5 text-white`}
      >
        {/* Logo */}
        <h1 className="text-3xl font-semibold italic tracking-wide">
          GRAPES-3
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm ml-auto">

          {navItem("/", "Home")}
          <span className="text-gray-400">|</span>

          {navItem("/overview", "Overview")}
          <span className="text-gray-400">|</span>

          {navItem("/members", "Members")}
          <span className="text-gray-400">|</span>

          {navItem("/science", "Science")}
          <span className="text-gray-400">|</span>

          {navItem("/publications", "Publications")}
          <span className="text-gray-400">|</span>

          {navItem("/education", "Education")}
          <span className="text-gray-400">|</span>

          {navItem("/outreach", "Outreach")}
          <span className="text-gray-400">|</span>

          {navItem("/gallery", "Gallery")}
          <span className="text-gray-400">|</span>

          {navItem("/contact", "Contact")}

        </div>
      </div>
    </nav>
  );
}