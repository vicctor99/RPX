"use client";

import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Serviços",
    href: "/servicos",
  },
  {
    title: "Importação",
    href: "/importacao",
  },
  {
    title: "Consultoria",
    href: "/consultoria",
  },
];

const Links = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex gap-x-6 text-lg text-blue-950 font-semibold">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="hover:text-red-500 transition duration-200 ease-in-out "
            >
              {link.title}
            </Link>
          </li>
        ))}
        <div>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-red-500 transition duration-200 ease-in-out"
          >
            <FiPhoneCall />
            +55 (47) 3170 0788
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Links;
