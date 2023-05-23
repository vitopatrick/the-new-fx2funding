import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRST_LINKS, SECOND_LINKS } from "../../../lib/side-nav-links";
import { clsx } from "clsx";

const MobileSideNav = ({ hide, setHide }: any) => {
  const pathname = usePathname();

  const boxClasses = (url: any) =>
    clsx({
      ["font-db text-button font-main flex gap-1 items-center my-6 pl-4"]: true,
      ["bg-bg w-full py-2 pl-2 rounded-lg "]: pathname === url,
    });

  const textClasses = (url: any) =>
    clsx({
      ["font-db"]: true,
      ["font-db font-semibold text-orange-200"]: pathname === url,
    });

  return (
    <div
      onClick={() => setHide(true)}
      className={
        hide
          ? "hidden"
          : "absolute top-0 left-0 backdrop-blur-md bg-neutral-300/40 w-screen h-screen z-50"
      }
    >
      <div className="w-[260px] md:block bg-bg h-full">
        {/* parent flex container */}
        <div className="flex flex-col justify-between gap-4 p-3">
          {/* first links flex container */}
          <div>
            {/* logo flex container */}

            {FIRST_LINKS.map((link) => (
              <Link
                href={link.path}
                key={link.key}
                className={boxClasses(link.path)}
              >
                {/* flex item */}
                <div className={textClasses(link.path)}>{link.icon}</div>
                <div
                  className={textClasses(link.path)}
                  onClick={() => setHide(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          {/* second links flex container */}
          <div>
            {SECOND_LINKS.map((link) => (
              <Link
                href={link.path}
                key={link.key}
                className={boxClasses(link.path)}
              >
                {/* flex item */}
                <div className={textClasses(link.path)}>{link.icon}</div>
                <div
                  className={textClasses(link.path)}
                  onClick={() => setHide(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideNav;
