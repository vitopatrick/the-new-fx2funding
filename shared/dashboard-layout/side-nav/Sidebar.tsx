import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRST_LINKS, SECOND_LINKS } from "../../../lib/side-nav-links";
import { clsx } from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  const boxClasses = (url: any) =>
    clsx({
      ["text-neutral-300 flex items-center gap-2 p-3  my-6"]: true,
      ["bg-blue-500/20 rounded"]: pathname === url,
    });

  const textClasses = (url: any) =>
    clsx({
      ["font-main"]: true,
      ["font-main font-semibold text-blue-500"]: pathname === url,
    });

  return (
    <div className="w-[260px] hidden md:block bg-bg h-full">
      {/* parent flex container */}
      <div className="flex flex-col justify-between gap-4 p-3 h-full">
        {/* first links flex container */}
        <div className="h-full">
          {/* logo flex container */}
          <div className="mb-8 font-bold text-button uppercase font-main text-xl">
            <img src="/logo.webp" alt="logo" className="w-[50%] p-2" />
          </div>
          {FIRST_LINKS.map((link) => (
            <Link
              href={link.path}
              key={link.key}
              className={boxClasses(link.path)}
            >
              {/* flex item */}
              <div className={textClasses(link.path)}>{link.icon}</div>
              <div className={textClasses(link.path)}>{link.label}</div>
            </Link>
          ))}
          {SECOND_LINKS.map((link) => (
            <Link
              href={link.path}
              key={link.key}
              className={boxClasses(link.path)}
            >
              {/* flex item */}
              <div className={textClasses(link.path)}>{link.icon}</div>
              <div className={textClasses(link.path)}>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
