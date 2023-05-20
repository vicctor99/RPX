"use client";

import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import Hamburger from "./Hamburger";
import Links from "./Links";
import Logo from "./Logo";

const Navbar = () => {
  const isSmallerScreen = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="w-full fixed bg-white border-b-[1px] z-10 shadow-lg py-3 md:py-6">
      <div>
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {isSmallerScreen && <Hamburger />}
            <Logo />
            <Links />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
