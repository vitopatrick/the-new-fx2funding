import React from "react";
import thearticles from "./thearticles";

const Articles = () => {
  return (
    <section className="bg-neutral-900 p-4 pb-32 text-white h-[250vh] md:h-[100vh]">
      <div>
        <h4 className="text-center p-4 text-2xl font-semibold">Article</h4>
        <div className="w-[70%] mx-auto flex items-center md:flex-row flex-col gap-6 mt-8">
          {thearticles.map((article) => (
            <div key={article.id}>
              <div className="mb-4">
                <img src={article.img} className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <h4 className="font-semibold text-3xl">{article.title}</h4>
                <p className="text-blue-500">{article.author}</p>
                <p className="leading-relaxed font-semibold text-neutral-500 text-xl">
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
