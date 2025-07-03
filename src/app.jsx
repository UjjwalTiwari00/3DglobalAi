import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import "./index.css";
import MainSection from "./components/MainSection";
import ServicesSection from "./components/ServicesSection";
import BackgroundCanvas from "./components/background/background";
import CTRMSection from "./components/CTRMSection";
import { color } from "d3";

function App() {
  return (
    <div>
      <MainSection />
      {/* <ServicesSection/> */}
      <BackgroundCanvas
        imageUrl="https://images.unsplash.com/photo-1660970781103-ba6749cb9ce3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isBlur={false}
        style={{ height: "99vh" }}
      >
        <CTRMSection />
      </BackgroundCanvas>

      {/* <BackgroundCanvas
        isBlur={false}
        style={{ height: "75vh", backgroundColor: "#D5D6D5" }}
      >
        <div className="tanslate -transform-x-1/2">
          <h1>inventroy , pnl ,eod report </h1>
        </div>
         <img
    src="https://cdn.prod.website-files.com/6731cce8f0339c484d9c2d73/67af0224a7d55c66ea5b18df_Home%20hero%20img-p-1600.avif"
    alt="Background"
    className="absolute bottom-0 right-0 "
  />
      </BackgroundCanvas> */}
    <section className="relative h-[75vh] bg-[#D5D6D5] px-8 py-12 overflow-hidden">
  <div className="relative z-10 max-w-xl flex flex-col items-start justify-center h-full translate-x-1/4">
    <h1 className="text-5xl font-bold mb-4">Inventory, P&L, EOD Report</h1>
    <p className="mb-6 text-lg text-gray-700">
      Get detailed insights into your inventory, profit & loss, and end-of-day reports effortlessly.
    </p>
    <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
      Get Started
    </button>
  </div>
  <img
    src="https://cdn.prod.website-files.com/6731cce8f0339c484d9c2d73/67af0224a7d55c66ea5b18df_Home%20hero%20img-p-1600.avif"
    alt="Background"
    className="absolute bottom-0 right-0  translate-x-1/4 translate-y-2/4 object-cover"
  />
</section>


      <Footer />
    </div>
  );
}

export default App;
