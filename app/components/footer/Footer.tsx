"use client";

import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t-[2px] border-gray-400 py-10 mx-auto px-5 md:px-28 lg:px-32 xl:px-72 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 md:grid-cols-3 sm:grid-cols-2 text-white">
        <div className="flex flex-col md:items-start items-center">
          <h1 className="text-lg font-semibold uppercase">Conheça a RPX</h1>
          <span className="border-b-[3px] border-red-600 md:w-[30px] mb-2 w-[20%]"></span>
          <ul className="text-neutral-400">
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Sobre Nós
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  md:items-start items-center">
          <h1 className="text-lg font-semibold uppercase">Notícias</h1>
          <span className="border-b-[3px] border-red-600 md:w-[30px] mb-2 w-[20%]"></span>
          <ul className="text-neutral-400">
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Últimas Notícias
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  md:items-start items-center">
          <h1 className="text-lg font-semibold uppercase">Serviços</h1>
          <span className="border-b-[3px] border-red-600 md:w-[30px] mb-2 w-[20%]"></span>
          <ul className="text-neutral-400">
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Quero importar da China
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Preciso de fornecedores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Descobrir oportunidades
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  md:items-start items-center">
          <h1 className="text-lg font-semibold uppercase">Entre em contato</h1>
          <span className="border-b-[3px] border-red-600 md:w-[30px] mb-2 w-[20%]"></span>
          <ul className="text-neutral-400">
            <li className="flex items-center gap-3">
              <FiMail />
              +55 (47) 3170 0788
            </li>
            <li className="flex items-center gap-3">
              <FiPhoneCall />
              info@globalrpx.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
