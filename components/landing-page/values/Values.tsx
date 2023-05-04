import React from "react";
import theValues from "./theValues";

const Values = () => {
  return (
    <section
      style={{
        background: `url(https://fx2funding.com/wp-content/uploads/2022/11/bg-img_04.jpg)`,
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black/70">
        <div className="md:w-[60%] mx-auto my-40">
          <h4 className="p-4 bg-[#0074db]/30 text-[#0084ff] font-semibold">
            FX2 PIPS VALUES
          </h4>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {theValues.map((value) => (
              <div key={value.name} className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-[10%]">
                    <img src={value.icon} alt="" />
                  </div>
                  <h4 className={`text-3xl font-semibold ${value.color}`}>
                    {value.name}
                  </h4>
                </div>
                <h4 className="text-xl leading-relaxed text-neutral-400">
                  {value.about}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
