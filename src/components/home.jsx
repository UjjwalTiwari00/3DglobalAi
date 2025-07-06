import React from "react";
import MainSection from "./MainSection";
import BackgroundCanvas from "./background/background";
import CTRMSection from "./CTRMSection";
import SectorsGrid from "./SectorsGrid";
import Solutions from "./solutions";
import SummitHero from "./SummitHero";
import ETRMFeatures from "./ETRMFeatures";

export default function Home() {
  return (
    <div>
      <MainSection />
       <Solutions />
       <SummitHero />
         <CTRMSection />
         <ETRMFeatures/>
      {/* <BackgroundCanvas
        imageUrl="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isBlur={false}
        style={{ height: "99vh" }}
      >
      
      </BackgroundCanvas>

      <SectorsGrid />

      <BackgroundCanvas
        imageUrl="https://images.unsplash.com/photo-1663702610675-a13c95299b29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isBlur={true}
        style={{ height: "100vh" }}
      >
     
      </BackgroundCanvas> */}
    </div>
  );
}
