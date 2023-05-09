import React from "react";
import Layout from "../../components/Layout/Layout";
import Platforms from "../../components/landing-page/platforms/Platforms";
import ProcessBody from "../../components/process/Body";

const EvaluationProcessPage = () => {
  return (
    <Layout>
      <ProcessBody />
      <Platforms />
    </Layout>
  );
};

export default EvaluationProcessPage;
