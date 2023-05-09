import React from "react";

const points = [
  {
    id: 1,
    title: "Step one",
    desc: "Choose your account size. ",
  },
  {
    id: 2,
    title: "Step Two",
    desc: "Trade at your own pace and in your own style.",
  },
  {
    id: 3,
    title: "Step Three",
    desc: "Demonstrate a 10% gain without violating any of FX2’s three trading rules.",
  },
  {
    id: 4,
    title: "Step Four",
    desc: "Receive approval for your live funded account! ",
  },
];

const ProcessBody = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,56,0.59),rgba(0,20,56,0.59)),url(https://fx2funding.com/wp-content/uploads/2022/11/bg-img_02.jpg)",
        backgroundSize: "auto,cover",
        backgroundColor: "#000000",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
      }}
      className="py-12 font-lp"
    >
      <div className="w-[90%] md:w-[60%] mx-auto text-white">
        <div>
          <h4 className="font-semibold text-3xl md:text-4xl my-8">
            FX2 has created the most simple and straightforward evaluation
            process in the prop firm market.
          </h4>
          {points.map((point) => (
            <div className="flex items-center my-8 gap-4">
              <div className="border border-neutral-600 rounded-full p-4 h-[50px] w-[50px]  text-2xl flex items-center justify-center">
                {point.id}
              </div>
              <div>
                <h4 className="text-blue-400">{point.title}</h4>
                <p className="text-neutral-400 text-2xl my-2">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBody;
