import React from "react";
// import ScalingHeader from "./ScalingHeader";
import Link from "next/link";

const scalingPoints = [
  {
    id: 1,
    point: "Make 10%",
  },
  {
    id: 2,
    point: "Withdraw your percentage of the profits (up to 85%)",
  },
  {
    id: 3,
    point: "FX2 increases your original account size by 10%",
  },
];

const ScalingBody = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,56,0.73),rgba(0,20,56,0.73)),url(https://fx2funding.com/wp-content/uploads/2022/12/bg_img_04.jpg)",
        backgroundSize: "auto,cover",
        backgroundColor: "#000000",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
      className="h-[100vh] md:h-[100vh] font-main text-white"
    >
      {/* <ScalingHeader /> */}
      <div className="font-bold text-xl md:text-3xl space-y-10 px-3 pt-10 w-[90%] md:w-[60%] mx-auto">
        <h4 className="text-neutral-300">
          Once you become an approved live trader, FX2 provides the industry's
          fastest program for you to scale-up your earnings.
        </h4>
        <h4 className="text-neutral-300">
          Your success is our success - the more you demonstrate your trading
          mastery, the more resources you unlock.
        </h4>
      </div>
      <div className="text-neutral-500 text-xl md:text-4xl space-y-10 p-3 w-[90%] md:w-[60%] mx-auto my-3">
        {scalingPoints.map((point) => (
          <div className="flex items-center gap-6">
            <div className="border border-neutral-600 rounded-full p-4 h-[50px] w-[50px] flex items-center justify-center">
              {point.id}
            </div>
            <div>
              <h4>{point.point}</h4>
            </div>
          </div>
        ))}

        <h4 className="text-white font-bold text-xl md:text-3xl text-center">
          It's that simple
        </h4>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/auth/sign-up"
          className="w-fit font-bold bg-blue-500 text-white p-4 rounded"
        >
          Get Funded
        </Link>
      </div>
    </section>
  );
};

export default ScalingBody;
