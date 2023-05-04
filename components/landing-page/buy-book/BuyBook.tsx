import React from "react";

const BuyBook = () => {
  return (
    <section className="bg-black text-white">
      <div>
        <div className="md:w-[40%] mx-auto">
          <img
            src="https://fx2funding.com/wp-content/uploads/2022/11/fx2-story-img.jpg"
            alt=""
          />
        </div>
        <div className="shadow-md bg-gradient-to-b leading-loose font-semibold from-[#404040] to-[#000000] md:w-[60%] mx-auto p-10 space-y-4 md:text-3xl text-xl rounded">
          <p>
            FX2 Funding is a proprietary trading platform that supports highly
            skilled yet undercapitalized traders in growing their wealth.
          </p>
          <p className="text-neutral-500">
            We provide expansive funded accounts to traders who demonstrate
            advanced currency-trading acumen, equipping them with a
            comprehensive trading toolkit, world-class support, and
            market-leading profit split - as well as welcoming them into our
            elite global community.
          </p>
          <p className="text-neutral-500">
            FX2 is the next-generation prop firm powering the profits of traders
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuyBook;
