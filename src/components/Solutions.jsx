import React from "react";

const solutions = [
  {
    title: "Software - Energy Analytics",
    description:
      "Do you need help with valuing a renewable investment project, PPAs, battery energy storage, power plant, electrolyser, gas storage, - or you need bankable price forecasting services, risk management advisory or an E-/CTRM system?",
    image: "https://images.unsplash.com/photo-1724402022672-7591482b0509?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Software - C/ETRM",
    description:
      "Customize your own C/ETRM system, with advanced risk metrics and reporting tools. Bring together your physical commodity positions with financial contracts. This provides not only a complete picture of purchases and sales, but also of the financial risks you are exposed to.",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Price Analytics",
    description:
      "Market prices, market price forecasts and simulations for short and long-term are essential ingredients in energy and commodity management. KYOS offers a suite of functions and quant models to create and analyze all these price series.",
    image: "http://images.unsplash.com/photo-1745270917331-787c80129680?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Advisory & Data Services",
    description:
      "KYOS Energy Consulting offers a wide range of services to support companies with managing their (renewable) production position. Our expert services range from a one-off deal valuation to a complete solution for the risk management of a portfolio of renewable generation assets and contracts.",
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

const Solutions = () => {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-[#cbcaf5] mb-2">
          Solutions
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-6 rounded-lg">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className=" shadow-sm rounded-md overflow-hidden bg-white flex flex-col max-w-6xl"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700 flex-grow">{solution.description}</p>
              {/* <a
                href={solution.link}
                className="text-red-600 mt-4 inline-block hover:underline"
              >
                Read more ›
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
