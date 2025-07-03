import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Newsapp from "./components/News/Newsapp";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      {/* ✅ HEADER is always shown */}
      <Header className='absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl'/>

      {/* ✅ Your pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Newsapp />} />
         <Route path="/blogs" element={<BlogPage />} />
         <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* ✅ FOOTER is always shown */}
      <Footer />
    </Router>
  );
}

export default App;
