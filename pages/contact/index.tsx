import React from "react";
import Layout from "../../components/Layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,20,56,0.87),rgba(0,20,56,0.87)),url(https://fx2funding.com/wp-content/uploads/2022/12/bg_img_07.jpg)",
          backgroundSize: "auto,auto auto",
          backgroundColor: "#141414",
          textAlign: "left",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "50% 0%",
        }}
      >
        <div className="md:w-[50%] mx-auto py-12">
          <div
            className="bg-red-500 h-[200px] w-[200px] border border-neutral-400 mx-auto my-10 rounded-full"
            style={{
              backgroundImage:
                "url(https://fx2funding.com/wp-content/uploads/2022/12/fiona.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="text-center space-y-3 text-white font-main">
            <h4 className="font-semibold text-2xl md:text-4xl">
              Have any questions about FX2? We'd love to hear from you.
            </h4>
            <p className="text-blue-600">support@fx2funding.live</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
