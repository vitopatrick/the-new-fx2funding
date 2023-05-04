import Link from "next/link";
import * as Fa from "react-icons/fa";
import { links } from "./links";

const Navbar = () => {
  return (
    <nav className="bg-bg text-white">
      <div className="p-3 flex justify-between items-center font-lp">
        <div className="p-3">
          <img src="/logo.webp" alt="logo" className="w-[50%]" />
        </div>
        <div className="space-x-8 text-lg capitalize hidden md:block">
          {links.map((link) => (
            <Link href={link.path} className="hover:text-blue-500 ease-in-out">
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
            href="/auth/sign-in"
            className="text-white bg-blue-600 rounded shadow-md font-bold p-2"
          >
            Get funded
          </Link>
        </div>
        <div className="md:hidden block">
          <Fa.FaBars size={45} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
