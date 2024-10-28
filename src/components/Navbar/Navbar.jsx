import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="pb-8">
      <div className="px-8">
        <div className="hidden md:flex justify-between items-center pt-8 mx-auto max-w-[1216px]">
          <div className="font-semibold dark:text-white">SAFA HADID</div>
          <div>
            <ul className="flex space-x-8 font-semibold dark:text-white">
              <li>
                <Link to="/" onClick={()=>setIsOpen(!isOpen)}>Blog</Link>
              </li>
              <li>Projects</li>
              <li>About</li>
              <li>
                <Link to="/newsletter" onClick={()=>setIsOpen(!isOpen)}>Newsletter</Link>
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div
                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    onClick={toggleTheme}
                  ></div>
                  <span className="ml-3 text-sm font-medium">
                    {isDarkTheme ? (
                      <img src="/assets/moon.svg" alt="Dark mode icon" />
                    ) : (
                      <img src="/assets/sun.svg" alt="Light mode icon" />
                    )}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {!isOpen ? (
        <div className="flex justify-between md:hidden pt-5 px-4 dark:text-white">
          <div className="font-semibold">SAFA HADID</div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 md:hidden dark:bg-[#090D1F] text-black dark:text-white">
          <div className="h-[90vh] flex flex-col justify-center items-center">
            <ul className="space-y-4 text-center font-semibold">
              <li>SAFA HADID</li>
              <li>
                <Link to="/" onClick={()=>setIsOpen(!isOpen)}>Blog</Link>
              </li>
              <li>Projects</li>
              <li>About</li>
              <li>
                <Link to="/newsletter" onClick={()=>setIsOpen(!isOpen)}>Newsletter</Link>
              </li>
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div
                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    onClick={toggleTheme}
                  ></div>
                  <span className="ml-3 text-sm font-medium">
                    {isDarkTheme ? (
                      <img src="/assets/moon.svg" alt="Dark mode icon" />
                    ) : (
                      <img src="/assets/sun.svg" alt="Light mode icon" />
                    )}
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <button
            className="flex justify-center mx-auto mt-5 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
