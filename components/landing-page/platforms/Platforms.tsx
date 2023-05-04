import Link from "next/link";
import React from "react";

const Platforms = () => {
  return (
    <section>
      <div className="p-6">
        <h4 className="my-8 text-2xl text-neutral-400 text-center font-bold">
          Compare FX2 Funding to Other Platforms
        </h4>
        <div className="w-[70%] mx-auto">
          <img src="/chart.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-4 px-2 pb-32">
        <Link
          href="/about"
          className="font-bold text-white p-3 rounded shadow-md bg-neutral-600 block"
        >
          learn more
        </Link>
        <Link
          href="/auth/sign-up"
          className="font-bold text-white p-3 rounded shadow-md bg-blue-600 block"
        >
          Get Funded
        </Link>
      </div>
    </section>
  );
};

export default Platforms;
