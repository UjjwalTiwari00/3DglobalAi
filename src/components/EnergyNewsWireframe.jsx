// import React from 'react';

// export default function EnergyNewsLayout() {
//   return (
//     <div className="mt-30 bg-gray-50 p-20 py-16 max-w-8xl mx-auto">
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12 pb-8">
//         {/* Left Text */}
//         <div className="lg:w-1/5">
//           <h2 className="text-2xl font-bold mb-4">ETRM World: Your Complete Guide to Energy Trading & Risk Management Systems</h2>
//         </div>
//         {/* Center Image */}
//         <div className="lg:w-3/4 flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=450&q=80"
//             alt="Energy trading dashboard and analytics"
//             className="w-full h-auto object-cover rounded-lg shadow-md"
//           />
//         </div>
//         {/* Right Text */}
//         <div className="lg:w-1/5 bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-xl font-bold mb-4">Latest ETRM Updates</h3>
//           <ul className="space-y-4 text-gray-700">
//             <li>
//               <p className="text-sm">15 Jul 2025</p>
//               <p className="font-medium">Advanced ETRM Analytics Webinar</p>
//             </li>
//             <li>
//               <p className="text-sm">22 Jul 2025</p>
//               <p className="font-medium">KYOS AtRisk Model Deep Dive</p>
//             </li>
//             <li>
//               <p className="text-sm">Aug 2025</p>
//               <p className="font-medium">Energy Risk Management Report</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Bottom Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Card Template */}
//         {[
//           {
//             category: 'ETRM Software',
//             title: 'Comprehensive comparison of OpenLink vs KYOS: Which ETRM platform suits your energy trading needs?',
//             image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=200&q=80',
//           },
//           {
//             category: 'Risk Management',
//             title: 'Value-at-Risk vs Cashflow-at-Risk: Understanding advanced analytics for energy portfolio optimization',
//             image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&h=200&q=80',
//           },
//           {
//             category: 'Industry Guide',
//             title: 'Complete ETRM implementation guide: From trade capture to regulatory compliance in 2025',
//             image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=200&q=80',
//           },
//           {
//             category: 'Energy Trading',
//             title: 'How renewable energy PPAs are transforming ETRM requirements and portfolio management strategies',
//             image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&h=200&q=80',
//           },
//         ].map((item, idx) => (
//           <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
//             <img src={item.image} alt={item.category} className="w-full h-32 object-cover" />
//             <div className="p-4">
//               <p className="text-xs text-gray-500 uppercase mb-1">{item.category}</p>
//               <h4 className="text-sm font-bold leading-snug">{item.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

export default function EnergyNewsLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=450&q=80',
      alt: 'Energy trading dashboard and analytics'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=450&q=80',
      alt: 'ETRM software interface'
    },
    {
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=450&q=80',
      alt: 'Risk management analytics'
    },
    // {
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80',
    //   alt: 'Energy portfolio optimization'
    // },
    // {
    //   image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&h=450&q=80',
    //   alt: 'Renewable energy trading'
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="mt-30 bg-white p-20 py-16 max-w-8xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12 pb-8">
        {/* Left Text */}
        <div className="lg:w-2/6">
          <h2 className="text-4xl font-bold mb-4">ETRM World: Your Complete Guide to Energy Trading & Risk Management Systems</h2>
        </div>
        {/* Center Image Carousel */}
        <div className="lg:w-3/4 flex justify-center relative">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto object-cover flex-shrink-0"
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}
            
            {/* <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}

            {/* Dots Indicator */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
        {/* Right Text */}
        <div className="lg:w-1/5 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Latest ETRM Updates</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <p className="text-sm">15 Jul 2025</p>
              <p className="font-medium">Advanced ETRM Analytics Webinar</p>
            </li>
            <li>
              <p className="text-sm">22 Jul 2025</p>
              <p className="font-medium">KYOS AtRisk Model Deep Dive</p>
            </li>
            <li>
              <p className="text-sm">Aug 2025</p>
              <p className="font-medium">Energy Risk Management Report</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card Template */}
        {[
          {
            category: 'ETRM Software',
            title: 'Comprehensive comparison of OpenLink vs KYOS: Which ETRM platform suits your energy trading needs?',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=200&q=80',
          },
          {
            category: 'Risk Management',
            title: 'Value-at-Risk vs Cashflow-at-Risk: Understanding advanced analytics for energy portfolio optimization',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&h=200&q=80',
          },
          {
            category: 'Industry Guide',
            title: 'Complete ETRM implementation guide: From trade capture to regulatory compliance in 2025',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=200&q=80',
          },
          {
            category: 'Energy Trading',
            title: 'How renewable energy PPAs are transforming ETRM requirements and portfolio management strategies',
            image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&h=200&q=80',
          },
        ].map((item, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={item.image} alt={item.category} className="w-full h-54 object-cover" />
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">{item.category}</p>
              <h4 className="text-sm font-bold leading-snug">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}