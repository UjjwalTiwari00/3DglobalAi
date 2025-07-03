import React from "react";

const sectors = [
  {
    title: "Offshore Wind Recruitment",
    short: "Offshore Wind",
    detail:
      "We provide skilled white & blue collar workers for offshore wind projects globally.We provide skilled white & blue collar workers for offshore wind projects globally.",
    image:
      "https://images.unsplash.com/photo-1562519990-50eb51e282b2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Energy Storage Recruitment",
    short: "Energy Storage",
    detail:
      "Recruitment for battery storage, grid storage and related energy projects.",
    image:
      "https://images.unsplash.com/photo-1589276534126-adef63a95e05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW5lcmd5JTIwU3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Technology & Recruitment",
    short: "Technology",
    detail:
      "Supplying IT professionals for digital transformation in the energy sector.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marine Recruitment",
    short: "Marine",
    detail:
      "Specialists in providing marine crews and port operations personnel worldwide.We provide skilled white & blue collar workers for offshore wind projects globally.",
    image:
      "https://images.unsplash.com/photo-1584270148139-7dfa9637869b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Power Generation Recruitment",
    short: "Power Generation",
    detail:
      "Staffing for thermal, hydro and nuclear power plants with highly trained workers.We provide skilled white & blue collar workers for offshore wind projects globally.",
    image:
      "https://images.unsplash.com/photo-1616708769713-23cb9d112fd1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Power Gas Recruitment",
    short: "Power Gas",
    detail:
      "Staffing for thermal, hydro and nuclear power plants with highly trained workers.We provide skilled white & blue collar workers for offshore wind projects globally.",
    image:
      "https://images.unsplash.com/photo-1622322977884-6e76ff00fa44?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SectorsGrid = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-l from-[#CBD3F2] to-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-6xl font-bold text-[#6966D5] mb-2">
          Our Sectors
        </h1>
        <div className="w-29 h-1 bg-purple-700 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          As pioneers of our industry, we have cultivated market-leading
          verticals to provide white & blue collar workers to the following
          sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6 rounded-lg  bg-opacity-10">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative group h-60 rounded-lg overflow-hidden  cursor-pointer w-[90%] "
          >
            <img
              src={sector.image}
              alt={sector.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/50 group-hover:backdrop-blur-sm"></div>

            {/* Text Container */}
            <div className="absolute bottom-0 p-4 text-white w-full z-10">
              <h3 className="text-lg font-semibold">{sector.short}</h3>
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                <p className="mt-2 text-sm">{sector.detail}</p>
              </div>
            </div>

            {/* Content */}
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-10">
    <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
      VIEW ALL SECTORS
    </button>
  </div> */}
    </section>
  );
};

export default SectorsGrid;
