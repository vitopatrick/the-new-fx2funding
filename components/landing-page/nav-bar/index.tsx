import Link from "next/link";
import * as Fa from "react-icons/fa";
import { links } from "./links";
import MobileNavbar from "./mobile-navbar";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-bg text-white">
        <div className="p-3 flex justify-between items-center font-lp">
          <div className="p-3 md:w-[8%] w-[24%]">
            <img src="/logo.webp" alt="logo" />
          </div>
          <div className="space-x-8 text-lg capitalize hidden md:block">
            {links.map((link) => (
              <Link
                href={link.path}
                target="_blank"
                className="hover:text-blue-500 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:flex items-center gap-4 hidden">
            <Link
              href="/auth/sign-in"
              className="flex items-center gap-2 text-blue-600 font-bold"
            >
              <Fa.FaKey /> Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="text-white bg-blue-600 rounded shadow-md font-bold p-2"
            >
              Get funded
            </Link>
          </div>
          <div className="md:hidden block">
            <Fa.FaBars size={28} onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>
      <MobileNavbar show={open} close={setOpen} />
    </>
  );
};

export default Navbar;
