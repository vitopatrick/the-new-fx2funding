import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),#000000),url(https://fx2funding.com/wp-content/uploads/2022/12/hero-image_affiliates.jpg)",
        backgroundColor: "#141414",
      }}
      className="py-10 font-main"
    >
      <div className="w-[90%] md:w-[60%] mx-auto py-10">
        <h4 className="text-2xl md:text-6xl md:w-[70%] mx-auto text-center font-semibold text-white">
          Join the most favorable affiliate program in the industry.
        </h4>
        <p className="text-center py-10 leading-loose text-base md:text-lg text-neutral-400">
          Partner with FX2 Funding to reap the most advantageous prop firm
          affiliate commissions on the market. Our affiliates earn up to 20% of
          revenue for referred clients. Whether you are a trading influencer,
          educator, or group administrator, your referrals to FX2 Funding can
          earn you sizable income for years to come!
        </p>
      </div>
    </section>
  );
};

export default Hero;
