import React from "react";

const CTRMETRMSection = () => {
  return (
    <section className="py-24 px-9 bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* ETRM Block */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Left */}
          <div className="md:w-1/2 h-64 md:h-[400px]">
            <img
              src="https://iongroup.com/wp-content/uploads/2023/11/Tackling-the-shift-to-renewable-energy-trading.jpg"
              alt="ETRM"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Right */}
          <div className="md:w-1/2 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 md:h-[400px]">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What is ETRM?
            </h2>
            <p className="text-gray-700 mb-4">
              ETRM stands for Energy Trade and Risk Management. It supports
              trading and risk management for energy commodities.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li>✔️ Power & Natural Gas</li>
              <li>✔️ Physical & Financial Trading</li>
              <li>✔️ Real-time P&amp;L</li>
              <li>✔️ Inventory & EOD Reporting</li>
            </ul>
          </div>
        </div>

        {/* CTRM Block */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Right */}

         <div className="md:w-1/2 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 order-1 md:order-2 md:h-[400px]">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 order-2 md:order-1">
              What is CTRM?
            </h2>
            <p className="text-gray-700 mb-4">
              CTRM means Commodity Trading and Risk Management. It helps
              businesses manage commodity trade operations and risk.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li>✔️ Multiple Commodities</li>
              <li>✔️ Regulatory Compliance</li>
              <li>✔️ Risk Mitigation</li>
              <li>✔️ Transparent Portfolios</li>
            </ul>
          </div>

          <div className="md:w-1/2 h-64 md:h-[400px] ">
            <img
              src="https://ieefa.org/sites/default/files/2022-07/global-chart-of-pricing.jpg"
              alt="CTRM"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {/* Content Left */}
         
        </div>
      </div>
    </section>
  );
};

export default CTRMETRMSection;
