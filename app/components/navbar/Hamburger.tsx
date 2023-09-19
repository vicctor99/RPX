"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="border-[1px] rounded-md p-3 cursor-pointer"
        onClick={handleToggle}
      >
        <FiMenu className="text-2xl text-blue-950" />
      </div>

      {isOpen && (
        <div className="absolute top-12 bg-white shadow-md rounded-md text-blue-950 font-semibold">
          <ul className="flex flex-col justify-center text-center">
            <li className="hover:bg-gray-200 px-8">
              <a href="#home" className="block py-4">
                Home
              </a>
            </li>
            <li className="hover:bg-gray-200 px-8">
              <a href="#home" className="block py-4">
                Sobre
              </a>
            </li>
            <li className="hover:bg-gray-200 px-8">
              <a href="#home" className="block py-4">
                Notícias
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
