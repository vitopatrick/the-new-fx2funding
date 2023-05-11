import React from "react";
import Layout from "../../components/Layout/Layout";
import { blogs } from "../../lib/blogs";

const ArticlesPage = () => {
  return (
    <Layout>
      <section className="bg-neutral-900 text-white">
        <div className="w-[90%] md:w-[60%] mx-auto pt-10">
          <h4 className="text-center text-3xl font-bold p-4">Articles</h4>
          <div className="grid md:grid-cols-3 gap-8 pt-6 pb-12">
            {blogs.map((blog) => (
              <div>
                <div
                  style={{
                    backgroundImage: `url(${blog.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-[220px] bg-neutral-400"
                ></div>
                <div className="space-y-4 mt-3">
                  <h4 className="font-bold text-2xl">{blog.title}</h4>
                  <p className="text-blue-500">{blog.author}</p>
                  <p className="leading-loose text-neutral-400">{blog.desc}</p>
                  <button className="font-bold rounded bg-black p-3 text-lg">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
