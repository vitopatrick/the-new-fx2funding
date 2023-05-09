import Link from "next/link";
import * as Fa from "react-icons/fa";
import { aboutLinks, fundingLinks } from "./links";

const MobileNavbar = ({ show, close }: any) => {
  return (
    <nav
      className={
        show
          ? "absolute block md:hidden top-0 left-0 w-full min-h-screen bg-bg text-white z-30"
          : "hidden"
      }
    >
      <div className="absolute top-0 right-0 p-4">
        <Fa.FaTimes
          onClick={() => close(false)}
          className="text-3xl fill-white cursor-pointer"
        />
      </div>
      <div className="p-4">
        <Link
          href="/auth/sign-in"
          className="flex items-center text-blue-500 gap-4 font-semibold"
        >
          <Fa.FaKey /> Login
        </Link>
        <div className="my-10">
          <h4 className="text-center text-neutral-600">How funding Works</h4>
          <div className="flex flex-col items-center mt-5 justify-center gap-4">
            {fundingLinks.map((fundLink) => (
              <Link
                href={fundLink.path}
                key={fundLink.name}
                className="text-2xl text-neutral-400 hover:text-blue-500 ease-in"
              >
                {fundLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="my-10">
          <h4 className="text-center text-neutral-600">About FX2</h4>
          <div className="flex flex-col items-center mt-5 justify-center gap-4">
            {aboutLinks.map((aboutLink) => (
              <Link
                href={aboutLink.path}
                key={aboutLink.name}
                className="text-2xl text-neutral-400 hover:text-blue-500 ease-in"
              >
                {aboutLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/auth/sign-up"
            className="font-semibold p-3 bg-blue-500 rounded"
          >
            Get funded
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
