import React from "react";

const CTRMETRMSection = () => {
  return (
    <section className="py-16 px-9 ">
      <div className="max-w-8xl px-16 mx-auto flex flex-col gap-20">
        {/* ETRM Block: Image Left */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Left */}
          <div className="md:w-1/2 h-64 md:h-[400px] hover:scale-105 transition-transform duration-500 shadow-lg">
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
            <p className="text-gray-1000 mb-4">
              ETRM stands for Energy Trade and Risk Management. It supports
              trading and risk management for energy commodities.
              ETRM solutions are sophisticated software systems designed to
              support the entire lifecycle of trading commodities and energy
              products. These solutions provide comprehensive tools for deal
              capturing, risk management, position management, valuation,
              optimization, regulatory reporting, accounting, settlement, and
              price management.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li>✔️ Power & Natural Gas</li>
              <li>✔️ Physical & Financial Trading</li>
              <li>✔️ Real-time P&amp;L</li>
              <li>✔️ Inventory & EOD Reporting</li>
            </ul>
          </div>
        </div>

        {/* CTRM Block: Content Left + Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Content Left */}
          <div className="md:w-1/2 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 md:h-[400px] order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What is CTRM?
            </h2>
            <p className="text-gray-1000 mb-4">
              CTRM means Commodity Trading and Risk Management. It helps
              businesses manage commodity trade operations and risk.
              CTRM (Commodity Trading and Risk Management) software is
              specialized enterprise resource planning (ERP) and risk
              management software designed for companies involved in commodity
              trading. It helps manage the entire lifecycle of physical and
              financial commodity trades, from front to back office, including
              risk management and compliance.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li>✔️ Multiple Commodities</li>
              <li>✔️ Regulatory Compliance</li>
              <li>✔️ Risk Mitigation</li>
              <li>✔️ Transparent Portfolios</li>
            </ul>
          </div>

          {/* Image Right */}
          <div className="md:w-1/2 h-64 md:h-[400px] hover:scale-105 transition-transform duration-500 shadow-lg order-1 md:order-2">
            <img
              src="https://ieefa.org/sites/default/files/2022-07/global-chart-of-pricing.jpg"
              alt="CTRM"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTRMETRMSection;
