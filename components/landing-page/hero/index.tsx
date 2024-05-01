import Link from "next/link";

const Hero = () => {
  return (
    <section
      style={{
        background: `url('https://fx2funding.com/wp-content/uploads/2023/11/lp-hero-img-1.jpg')`,
        position: "relative",
      }}
      className="h-[70vh] md:h-[80vh]"
    >
      <div
        style={{
          position: "absolute",
          background: "rgba(0,0,0,0.6)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          paddingTop: "40px",
        }}
      >
        <div className="w-[90%] mx-auto flex">
          <div className="text-white capitalize self-center flex-col md:flex-row justify-self-center space-y-4  text-center md:text-left w-4/12 flex-1">
            <h4 className="md:text-6xl  font-bold text-3xl">
              Funded accounts for traders like you.
            </h4>
            <p className="my-4 md:text-2xl text-lg">
              Lowest cost one-stage evaluation with super-simple rules. Join
              thousands of traders worldwide who trust FX2 as their prop firm
              trading partner.
            </p>
            <div className="space-x-4">
              <Link
                href="/about"
                className="font-bold text-white p-3 rounded shadow-md bg-neutral-600"
              >
                learn more
              </Link>
              <Link
                href="/auth/sign-up"
                className="font-bold text-white p-3 rounded shadow-md bg-blue-600"
              >
                Get Funded
              </Link>
            </div>
          </div>
          <div className="w-[20%] hidden md:block">
            <img src="/phone.png" alt="mobile_phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
