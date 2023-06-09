"use client";

import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const SocialsFooter = () => {
  return (
    <div className="bg-zinc-900 pb-4 mx-auto px-5 md:px-28 lg:px-32 xl:px-72 w-full">
      <div className="flex text-center justify-center items-center gap-4 text-zinc-600 text-xl">
        <a href="#" className="hover:text-zinc-400 mouse-pointer">
          <FiFacebook />
        </a>
        <a href="#" className="hover:text-zinc-400 mouse-pointer">
          <FiInstagram />
        </a>
        <a href="#" className="hover:text-zinc-400 mouse-pointer">
          <FiYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialsFooter;
