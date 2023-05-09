import React from "react";
import Navbar from "../landing-page/nav-bar";
import Footer from "../landing-page/footer/Footer";

const Layout = ({ children }: { children: React.ReactElement | any }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
