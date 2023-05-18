"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="cursor-pointer"
      height="110"
      width="110"
      src="/images/logo.png"
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default Logo;
