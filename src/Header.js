import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md w-full px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800"
        >
          Your Site Name
        </Link>
        <button
          className="text-gray-800 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} sm:block mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/subscribe"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
