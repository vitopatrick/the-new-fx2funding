import React from "react";

const Header = () => {
  return (
    <section className="bg-black/20 h-[250px]">
      <div className="flex">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque
            incidunt ea totam velit veritatis dicta fuga alias libero ipsum
            accusamus obcaecati iste maxime, deleniti repellendus dolorem iusto
            consectetur veniam. Dolores expedita nesciunt voluptatibus a
            reprehenderit facilis veniam ipsam cum.
          </p>
        </div>
        <div
          className="h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,3,22,0.4),rgba(0,3,22,0.4)),url(https://fx2funding.com/wp-content/uploads/2022/12/lifestyle_11.jpg)",
            backgroundSize: "auto,cover",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Header;
