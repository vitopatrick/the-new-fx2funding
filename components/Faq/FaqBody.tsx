import Link from "next/link";
import React from "react";
import FaqAccordion from "./FaqAccordion";

const FaqBody = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,56,0.7),rgba(0,20,56,0.7)),url(https://fx2funding.com/wp-content/uploads/2022/11/huge_bg_01.jpg)",
        backgroundSize: "auto,cover",
        backgroundColor: "#141414",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="font-main"
    >
      <div className="w-[90%] md:w-[60%] mx-auto p-4">
        <div className="text-center font-main">
          <h4 className="text-white text-3xl md:text-6xl font-bold my-5">
            FAQ
          </h4>
          <p className="text-neutral-500 text-2xl">
            Here’s a list of some of the most commonly asked questions.
          </p>
        </div>
        <FaqAccordion />
        <div className="flex flex-col items-center justify-center text-center my-4 gap-4">
          <h4 className="font-semibold md:text-4xl text-2xl text-white">
            Couldn’t find the answer you needed?{" "}
          </h4>
          <p className="text-xl text-neutral-400">
            {" "}
            Simply reach out to FX2’s dedicated support team and we’ll be in
            touch to help you out as soon as possible.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-xl p-3 rounded text-white font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
