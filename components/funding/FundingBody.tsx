import React from "react";
import moreplans from "../landing-page/reasons/moreplans";
import Link from "next/link";
// import Plans from "../landing-page/reasons/Plans";

const FundingBody = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.59),rgba(0,0,0,0.59)),url(https://fx2funding.com/wp-content/uploads/2022/11/huge_bg_01.jpg)",
        backgroundSize: "auto cover",
      }}
      className="h-[250vh] md:h-[120vh] text-white"
    >
      <div className="w-[90%] md:w-[60%] mx-auto pt-10 ">
        <div className="flex items-center flex-col justify-center text-center gap-3">
          <h4 className="text-blue-500 text-xl">FX2 PROGRAMS</h4>
          <h4 className="md:text-4xl text-xl font-bold capitalize md:w-[60%] mx-auto">
            Choose the account that best fits your trading needs
          </h4>
        </div>
        <div className="grid md:grid-cols-3 mt-10 gap-4">
          {moreplans.map((plan) => (
            <div className="w-full max-w-sm p-4 bg-gray-800 border border-gray-200 rounded-lg shadow sm:p-8">
              <h5 className="mb-4 md:text-xl text-lg font-medium text-gray-500">
                {plan.name}
              </h5>
              <div className="f dark:text-white">
                <span className="text-4xl font-extrabold tracking-tight">
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
                ) : null}
                {plan.duration ? (
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
                      Duration: {plan.duration}
                    </span>
                  </li>
                ) : null}
              </ul>
              <Link
                href="/auth/sign-up"
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm p-4 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingBody;
