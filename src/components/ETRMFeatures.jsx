import React from "react";

const ETRMFeatures = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-8xl px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Heading */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">An ETRM built for Energy Markets</p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600  leading-tight">
                Streamline Your Energy Trading Workflows
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              From trade capture to risk management and compliance, our ETRM system empowers energy professionals to optimize every aspect of their operations. Discover how our platform can transform your trading strategy.
            </p>
          </div>
          {/* Middle Column - Deal Management & Power Scheduling */}
          <div className="lg:col-span-1 space-y-10">
            {/* Deal Management & Capture */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Deal Management & Capture
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Record complex trades with granular details and <span className="text-teal-600 font-medium">full audit trails</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrate with major exchanges like <span className="text-teal-600 font-medium">ICE</span> and <span className="text-teal-600 font-medium">CME</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Access <span className="text-teal-600 font-medium">real-time pricing</span> and market data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Streamline <span className="text-teal-600 font-medium">position management</span> for physical and financial contracts</span>
                </li>
              </ul>
            </div>

            {/* Power & Fuel Scheduling */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Power & Fuel Scheduling
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Manage <span className="text-teal-600 font-medium">Power Scheduling</span> and <span className="text-teal-600 font-medium">Gas & Fuel Logistics</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrate with <span className="text-teal-600 font-medium">North American ISOs</span> and <span className="text-teal-600 font-medium">European TSOs</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Automate <span className="text-teal-600 font-medium">scheduling workflows</span> for efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Upgrade to modern e-Tagging with <span className="text-teal-600 font-medium">e-Tag Pro</span> for faster submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Monitor transmission paths in real-time with <span className="text-teal-600 font-medium">Transmission Optimizer</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><span className="text-teal-600 font-medium">Centralize</span> scheduling, reporting, and tracking</span>
                </li>
              </ul>
            </div>

            {/* Risk Management */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Risk Management
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Assess portfolio value with <span className="text-teal-600 font-medium">real-time analytics</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Model assets <span className="text-teal-600 font-medium">holistically</span> for accurate valuations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ensure audit compliance with <span className="text-teal-600 font-medium">granular trade controls</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Monitor <span className="text-teal-600 font-medium">credit exposure</span> in real-time to avoid delays</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Configure <span className="text-teal-600 font-medium">trade limits</span> and <span className="text-teal-600 font-medium">risk guardrails</span> for compliance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Settlements & Compliance */}
          <div className="lg:col-span-1 space-y-10">
            {/* Settlements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Settlements
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Generate invoices and statements with <span className="text-teal-600 font-medium">flexible calculations</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Detect discrepancies early with <span className="text-teal-600 font-medium">shadow settlements</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Manage <span className="text-teal-600 font-medium">disputes and resolutions</span> within the platform</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Streamline <span className="text-teal-600 font-medium">contract settlements</span> for power and fuel</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrate seamlessly with <span className="text-teal-600 font-medium">ERP and GL systems</span></span>
                </li>
              </ul>
            </div>

            {/* Compliance and Reporting */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compliance and Reporting
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Generate reports for <span className="text-teal-600 font-medium">FERC, EIA</span>, and regulatory bodies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Extract data easily for <span className="text-teal-600 font-medium">analytics and audits</span></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Conduct <span className="text-teal-600 font-medium">post-trade analytics</span> for insights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ensure audit compliance with <span className="text-teal-600 font-medium">secure reports and controls</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ETRMFeatures;