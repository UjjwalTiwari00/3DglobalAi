// import React from "react";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Footer from "./components/Footer";
// import "./index.css";
// import MainSection from "./components/MainSection";
// import ServicesSection from "./components/ServicesSection";
// import BackgroundCanvas from "./components/background/background";
// import CTRMSection from "./components/CTRMSection";
// import { color } from "d3";
// import SectorsGrid from "./components/SectorsGrid";
// import Solutions from "./components/solutions";
// import Newsapp from "./components/News/Newsapp";

// function App() {
//   return (
//     <div>
//       <MainSection />
//       {/* <ServicesSection/> */}
//       <BackgroundCanvas
//         imageUrl="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         isBlur={false}
//         style={{ height: "99vh" }}
//       >
//         <CTRMSection />
//       </BackgroundCanvas>
      
//       <SectorsGrid/>


//       <BackgroundCanvas
//         imageUrl="https://images.unsplash.com/photo-1663702610675-a13c95299b29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         isBlur={true}
//         style={{ height: "100vh" }}
//       >
//         <Solutions/>
//       </BackgroundCanvas>
//       <Newsapp/>
//      <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import "./index.css";
import MainSection from "./components/MainSection";
import ServicesSection from "./components/ServicesSection";
import BackgroundCanvas from "./components/background/background";
import CTRMSection from "./components/CTRMSection";
import SectorsGrid from "./components/SectorsGrid";
import Solutions from "./components/solutions";
import Newsapp from "./components/News/Newsapp";

function Home() {
  return (
    <div>
      <MainSection />
      {/* <ServicesSection/> */}
      <BackgroundCanvas
        imageUrl="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isBlur={false}
        style={{ height: "99vh" }}
      >
        <CTRMSection />
      </BackgroundCanvas>

      <SectorsGrid />

      <BackgroundCanvas
        imageUrl="https://images.unsplash.com/photo-1663702610675-a13c95299b29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isBlur={true}
        style={{ height: "100vh" }}
      >
        <Solutions />
      </BackgroundCanvas>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/news"
          element={
            <>
              <Header />
              <Newsapp />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
