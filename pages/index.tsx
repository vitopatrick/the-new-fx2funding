import Layout from "../components/Layout/Layout";
import Articles from "../components/landing-page/articles/Articles";
import BuyBook from "../components/landing-page/buy-book/BuyBook";
// import Footer from "../components/landing-page/footer/Footer";
import Hero from "../components/landing-page/hero";
// import Navbar from "../components/landing-page/nav-bar";
import Platforms from "../components/landing-page/platforms/Platforms";
// import Process from "../components/landing-page/process/Process";
import Reasons from "../components/landing-page/reasons/Reasons";
import Values from "../components/landing-page/values/Values";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Reasons />
      {/* <Process /> */}
      <Platforms />
      {/* <Process /> */}
      <BuyBook />
      <Values />
      <Articles />
    </Layout>
  );
}
