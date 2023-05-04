import Link from "next/link";
import React from "react";
import * as Icon from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    icon: <Icon.FaFacebook />,
    link: "https://www.facebook.com/fx2funding/",
  },
  {
    id: 2,
    icon: <Icon.FaInstagram />,
    link: "https://www.instagram.com/fx2funding/",
  },
  {
    id: 3,
    icon: <Icon.FaTwitter />,
    link: "https://twitter.com/fx2funding/",
  },
  {
    id: 4,
    icon: <Icon.FaYoutube />,
    link: "https://www.youtube.com/@fx2funding",
  },
  {
    id: 5,
    icon: <Icon.FaTiktok />,
    link: "https://www.tiktok.com/@fx2funding/",
  },
  {
    id: 6,
    icon: <Icon.FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=15209072487&text=I%20need%20help%20with",
  },
  {
    id: 7,
    icon: <Icon.FaDiscord />,
    link: "https://discord.com/invite/fCBPXVStcg",
  },
];

const secondLink1 = [
  {
    id: 1,
    name: "Funding Program",
    link: "https://fx2funding.com/programs/",
  },
  {
    id: 2,
    name: "Affiliates",
    link: "https://fx2funding.com/affiliate-program/",
  },
  {
    id: 3,
    name: "Evaluation Process",
    link: "https://fx2funding.com/evaluation-process/",
  },
];

const secondLink2 = [
  {
    id: 4,
    name: "About Us",
    link: "https://fx2funding.com/about-us/",
  },
  {
    id: 5,
    name: "FAQ",
    link: "https://fx2funding.com/contact/",
  },
  {
    id: 6,
    name: "Trading Rules",
    link: "https://fx2funding.com/programs/",
  },
];
const secondLink3 = [
  {
    id: 7,
    name: "Contact",
    link: "https://fx2funding.com/contact/",
  },
  {
    id: 8,
    name: "Blog",
    link: "https://fx2funding.com/blog/",
  },
  {
    id: 9,
    name: "Scaling Plan",
    link: "https://fx2funding.com/scaling-plan/",
  },
];

const Footer = () => {
  return (
    <footer>
      <section className="bg-black">
        <div className="flex items-center justify-between px-12 py-14">
          <div>
            <img
              src="https://fx2funding.com/wp-content/uploads/2022/11/fx2-logo-traders-first.png"
              alt=""
              className="w-[60%]"
            />
          </div>
          <div className="text-white grid md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4">
              {secondLink1.map((linkOne) => (
                <a
                  href={linkOne.link}
                  target="_blank"
                  className="text-neutral-600 hover:text-blue-500 ease-in"
                >
                  {linkOne.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {secondLink2.map((linkTwo) => (
                <a
                  href={linkTwo.link}
                  target="_blank"
                  className="text-neutral-600 hover:text-blue-500 ease-in"
                >
                  {linkTwo.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {secondLink3.map((linkThree) => (
                <a
                  href={linkThree.link}
                  target="_blank"
                  className="text-neutral-600 hover:text-blue-500 ease-in"
                >
                  {linkThree.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex items-center  flex-col-reverse gap-4 hidden">
            <Link
              href="/auth/sign-in"
              className="flex items-center gap-2 text-blue-600 font-bold"
            >
              <Icon.FaKey /> Login
            </Link>
            <Link
              href="/auth/sign-in"
              className="text-white bg-blue-600 rounded shadow-md font-bold p-2"
            >
              Get funded
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#141414] p-12">
        <div className="flex items-center justify-center gap-6">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              target="_blank"
              key={item.id}
              className="text-2xl text-neutral-400 hover:text-blue-500"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className=" w-[200px] mx-auto">
          <img
            src="https://fx2funding.com/wp-content/uploads/2022/12/traders-first-1.jpg"
            alt=""
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
