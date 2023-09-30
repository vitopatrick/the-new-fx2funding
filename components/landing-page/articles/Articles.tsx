import React from "react";
import thearticles from "./thearticles";

const Articles = () => {
  // article
  return (
    <section className="bg-neutral-900 p-4 pb-32 text-white">
      <div>
        <h4 className="text-center p-4 text-2xl font-semibold">Article</h4>
        <div className="md:w-[70%] w-full p-2 mx-auto flex items-center md:flex-row flex-col gap-6 mt-8">
          {thearticles.map((article) => (
            <div key={article.id}>
              <div className="mb-4">
                <img src={article.img} className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <h4 className="font-semibold md:text-3xl text-base">
                  {article.title}
                </h4>
                <p className="text-blue-500 md:text-lg text-md">
                  {article.author}
                </p>
                <p className="leading-relaxed font-semibold text-neutral-500 md:text-lg text-sm">
                  {article.desc}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  className="p-2 rounded font-semibold text-base shadow-md bg-neutral-800 inline-block w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
