import React from "react";
import Layout from "../../shared/dashboard-layout/Layout";
import moreplans from "../../components/landing-page/reasons/moreplans";
import Link from "next/link";

const InvestmentPage = () => {
  return (
    <Layout>
      <div className="flex items-center flex-col justify-center">
        <h4 className="text-white font-main underline text-4xl p-4 text-center">
          Invest With Us Today
        </h4>
        <p className="font-main text-neutral-400">
          Choose a plan that fits your investment level
        </p>
      </div>
      <div className="w-[90%] font-main mt-10 mx-auto grid md:grid-cols-3 gap-4">
        {moreplans.map((plan) => (
          <div className="w-full max-w-sm p-4 rounded-lg shadow sm:p-8 bg-bg">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.name}
            </h5>
            <div className="f dark:text-white">
              <span className="text-4xl font-main font-extrabold tracking-tight">
                {plan.range}
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="space-y-5 my-7">
              {plan.bonus ? (
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Bonus {plan.bonus}
                  </span>
                </li>
              ) : (
                ""
              )}
            </ul>
            <Link
              href="/deposit"
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default InvestmentPage;
