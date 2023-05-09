import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const ScalingHeader = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div className="flex  h-[250px] bg-neutral-700/20 w-full">
      <div className="h-full p-4">
        <div className="flex items-center w-full text-neutral-400">
          <Link
            href={router.basePath ? router.route : "/"}
            className="font-bold text-blue-600"
          >
            {router.basePath ? router.basePath : "Home"}
          </Link>
          <Link href={router.route}>{router.route}</Link>
        </div>
        <div className="my-3 bg-blue-500/40">
          <h4>SCALING PLAN</h4>
        </div>
      </div>
      <div className="h-full bg-red-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error fugit
        voluptatum tempora totam ducimus numquam soluta cupiditate dolor,
        recusandae veritatis nisi minima nulla dolorum incidunt dolorem. Iusto,
        nihil modi!
      </div>
    </div>
  );
};

export default ScalingHeader;
