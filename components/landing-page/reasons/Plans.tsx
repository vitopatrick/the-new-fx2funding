import React from "react";
import moreplans from "./moreplans";
import Link from "next/link";

const Plans = () => {
  return (
    <section>
      <div className="flex items-center justify-center bg-blue-600/30 p-4  md:w-[60%] w-[95%] mx-auto">
        <h4 className="text-blue-500">FX2 PROGRAMS</h4>
      </div>
      <div className="flex items-center justify-center md:text-4xl text-2xl my-6 md:placeholder:w-[40%] mx-auto text-center">
        <h4 className="font-bold">
          Choose the funded account that best suits your unique needs.
        </h4>
      </div>
      {/* plans start */}
      <div className="grid md:grid-cols-3 gap-5 overflow-x-scroll w-[90%] mx-auto  my-12">
        {moreplans.map((plans) => (
          <Card
            name={plans.name}
            range={plans.range}
            bonus={plans.bonus}
            duration={plans.duration}
          />
        ))}
      </div>
      {/* plans end */}
      <div className="md:placeholder md:w-[40%] px-2 mx-auto md:text-xl text-base italic leading-loose text-neutral-500 pb-32">
        <p className="text-center">
          "FX2 Funding indeed offers exceptional attention to traders and I
          received my funded account within the day of passing their one step
          evaluation. Their distinction is also allowing more freedom in trading
          - no stop loss requirement, news trading restriction, weekend trading
          is allowed, plus also no limits to lot size restriction apart from
          available margin."
        </p>
        <h4 className="my-3 text-green-300 not-italic text-center text-base">
          SCALPER432 ON TWITTER
        </h4>
      </div>
    </section>
  );
};

const Card = ({ name, range, bonus, duration }: any) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 md:text-xl text-lg font-medium text-gray-500 dark:text-gray-400">
        {name}
      </h5>
      <div className="f dark:text-white">
        <span className="text-4xl font-extrabold tracking-tight">{range}</span>
      </div>
      {/* <!-- List --> */}
      <ul role="list" className="space-y-5 my-7">
        {bonus ? (
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
              Bonus {bonus}
            </span>
          </li>
        ) : null}
        {duration ? (
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
              Duration: {duration}
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
  );
};

export default Plans;
