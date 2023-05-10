import React from "react";
import theValues from "./theValues";

const Values = () => {
  return (
    <section
      style={{
        background: `url(https://fx2funding.com/wp-content/uploads/2022/11/bg-img_04.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        width: "100%",
      }}
    >
      <div className="bg-black/60">
        <div className="md:w-[60%] w-[95%] mx-auto py-20">
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
                  <h4
                    className={`md:text-3xl text-xl font-semibold ${value.color}`}
                  >
                    {value.name}
                  </h4>
                </div>
                <h4 className="md:text-xl text-md leading-loose text-neutral-400">
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
