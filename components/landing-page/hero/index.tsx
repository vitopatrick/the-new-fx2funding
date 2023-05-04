import Link from "next/link";

const Hero = () => {
  return (
    <section
      style={{
        background: `url('https://fx2funding.com/wp-content/uploads/2023/04/lp-hero-img-2.jpg')`,

        position: "relative",
        height: "80vh",
      }}
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
          <div className="text-white self-center space-y-4  text-center md:text-left">
            <h4 className="md:text-8xl font-bold text-4xl">
              A trader like you deserves to be funded.
            </h4>
            <p className="my-4 text-2xl">
              Prove your market magic and enjoy comprehensive funding on your
              road to trading mastery with FX2.
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
          <div className="w-[30%] hidden md:block">
            <img src="/phone.png" alt="mobile_phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
