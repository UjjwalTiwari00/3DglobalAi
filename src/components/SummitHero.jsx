import React from "react";

const SummitHero = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-8xl mx-auto py-20 px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-blue-600 leading-tight">
              Unlock the Power of ETRM: Your Gateway to Energy Market Success
            </h1>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Energy Trading and Risk Management (ETRM) is the cornerstone of modern energy markets. It empowers companies to navigate the complexities of trading commodities like oil, gas, and electricity. With ETRM, you can mitigate risks from price volatility, optimize your portfolio for maximum returns, and ensure compliance with ever-changing regulations. Discover how ETRM can transform your energy trading strategy and drive your business forward.
            </p>
            
            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors">
                Explore ETRM Solutions
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="https://iea.imgix.net/15e0645d-df72-46e8-8eed-c4dbbcecdb50/shutterstock_2555806929_Oil2025.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C569%2C5464%2C3071&w=814&fit=crop&fm=jpg&q=70&auto=format&h=458" 
              alt="Energy Trading Floor" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummitHero;