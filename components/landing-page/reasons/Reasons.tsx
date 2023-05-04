import React from "react";
import moreReasons from "./more-reasons";
import Plans from "./Plans";

const Reasons = () => {
  return (
    <section
      className="text-white"
      style={{
        background: `url('https://fx2funding.com/wp-content/uploads/2022/11/Huge-BG.jpg')`,
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-center flex-col gap-4 pt-8 my-4">
          <h4 className="md:text-6xl text-4xl font-bold md:w-[60%] text-center">
            The game-changing prop firm that puts traders first.
          </h4>
          <p className="text-xl text-neutral-500">
            FX2 has one mission - to help you grow your wealth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 p-4 gap-20 my-6 text-2xl md:w-[80%] mx-auto">
          {moreReasons.map((reason) => (
            <div className="space-y-5">
              <div className="flex gap-3 items-center">
                <img src={reason.icon} alt="logo" />
                <h4 className="font-bold">{reason.title}</h4>
              </div>
              <div className="text-neutral-500">
                <p>{reason.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Plans />
    </section>
  );
};

export default Reasons;
