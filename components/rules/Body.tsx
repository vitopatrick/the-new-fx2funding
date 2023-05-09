import React from "react";
import Header from "./Header";
import Link from "next/link";

const lists = [
  {
    id: 1,
    title: "Maximum Drawdown",
    desc: "Accounts must not incur a 5% drawdown on the total account size. This 5% drawdown trails your account until you achieve a 5% return on your account. Once you achieve a 5% return, it stops trailing and the drawdown is locked at your starting balance.",
  },
  {
    id: 2,
    title: "Daily Drawdown",
    desc: "Accounts must not incur a 4% drawdown in a single day.",
  },
  {
    id: 3,
    title: "Inactivity",
    desc: "Accounts must not remain inactive for 30 days or more.",
  },
];

const Body = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,56,0.59),rgba(0,20,56,0.59)),url(https://fx2funding.com/wp-content/uploads/2022/12/bg_img_05.jpg)",
        backgroundSize: "auto,cover",
        backgroundColor: "#000000",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
      className="font-lp"
    >
      <div>
        {/* <Header /> */}
        <div>
          <div className="md:w-[60%] mx-auto p-8">
            <h4 className="text-left text-neutral-300 font-semibold text-xl md:text-2xl leading-looses">
              Our simple trio of trading rules are designed to keep you fully
              focused on making the best trades and growing your account.
            </h4>
            <div className="space-y-6 md:space-y-8 my-8 text-neutral-400">
              {lists.map((list) => (
                <div className="flex gap-5">
                  <div>
                    <div className="border border-neutral-400 h-[70px] w-[70px] items-center justify-center flex rounded-full">
                      <h1 className="text-lg">{list.id}</h1>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-semibold text-2xl">
                      {list.title}
                    </h4>
                    <p className="leading-loose text-xl">{list.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center py-10">
              <h4 className="text-center text-white text-2xl md:text-4xl font-semibold">
                Ready to get started?
              </h4>
              <div className="my-8 flex flex-col items-center justify-center gap-4">
                <Link
                  href="/auth/sign-up"
                  className="font-semibold p-3 text-white bg-blue-600 rounded"
                >
                  Get Funded
                </Link>
                <Link
                  href="/auth/sign-in"
                  className="font-bold text-white p-3 bg-neutral-500 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
