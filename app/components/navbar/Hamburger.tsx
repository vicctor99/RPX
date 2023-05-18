"use client";

import Link from "next/link";
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
          <ul className="flex flex-col justify-center">
            <li className="hover:bg-gray-200">
              <Link href="/" className="block p-4">
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link href="/servicos" className="block p-4">
                Serviços
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link href="/importacao" className="block p-4">
                Importação
              </Link>
            </li>
            <li className="hover:bg-gray-200 ">
              <Link href="/consultoria" className="block p-4">
                Consultoria
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
