import Link from "next/link";
import React from "react";

const bodyPoints = [
  {
    id: 1,
    title: "Highest commission in the industry",
    about: "Earn 15% for your first 50 traders referred, 20% each thereafter.",
  },
  {
    id: 1,
    title: "No minimum commission payout",
    about: "Eligible for commission payout for each sale you refer. ",
  },
  {
    id: 1,
    title: "All payout requests instantly available",
    about: "Request as many payouts as you want, whenever you want.",
  },
];

const BodyShare = () => {
  return (
    <section className="bg-blue-600">
      <div className="w-[90%] md:w-[60%] mx-auto py-20">
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {bodyPoints.map((point) => (
            <div className="text-center font-main hover:scale-110 hover:shadow-2xl p-4 ease-in transition-all">
              <h4 className="text-2xl font-semibold text-white mb-4">
                {point.title}
              </h4>
              <p className="text-neutral-200">{point.about}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-[50%] mx-auto">
          <Link
            href="/auth/sign-up"
            className="uppercase font-semibold md:text-2xl  text-white inline-block text-center bg-black shadow-lg p-4 rounded w-full"
          >
            Join the Fx2 affiliate program now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BodyShare;
