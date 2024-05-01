import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,56,0.73),rgba(0,20,56,0.73)),url(https://fx2funding.com/wp-content/uploads/2022/12/Launch-Design.jpg)",
        backgroundSize: "auto auto auto",
        backgroundColor: "#141414",
        textAlign: "left",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 0%",
      }}
      className="h-[150vh] md:h-[120vh] font-main"
    >
      <div>
        <div className="mx-auto opacity-70 mix-blend-screen md:w-[50%]">
          <img src="/story-2.jpeg" alt="" />
        </div>
        <div className="md:w-[50%] mx-auto p-3 text-white space-y-14">
          <h4 className="md:text-4xl text-xl font-bold leading-[30px]">
            FX2 Funding is a proprietary trading platform that supports highly
            skilled yet undercapitalized traders in growing their wealth.
          </h4>
          <p className="text-[20px] leading-[1.8rem] text-neutral-400">
            We provide expansive funded accounts to traders demonstrating
            advanced currency-trading acumen, equipping them with a
            comprehensive trading toolkit, an elite global community,
            world-class support, and a market-leading profit split.
          </p>
          <p className="text-[20px] leading-[1.8rem] text-neutral-400">
            FX2 Funding, LLC is a United States entity backed by expansive
            private capital holdings. Our robust financial structure and good
            standing relationship with our global regulated broker EightCap
            enables us to conduct large, long-term financial transactions at
            scale.
          </p>
          <p className="text-[20px] leading-[1.8rem] text-neutral-400">
            FX2 is the next-generation prop firm powering the profits of traders
            worldwide.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="/auth/sign-up"
              className="text-white font-bold w-fit p-3 bg-blue-700 rounded"
            >
              Get Funded
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
