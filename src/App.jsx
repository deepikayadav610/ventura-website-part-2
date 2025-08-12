import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import HotWork from "./components/Products/Hot-Work/hot-work.jsx";
import DB6 from "./components/Products/Hot-Work/Grades/DB6/DB6.jsx";
import H13 from "./components/Products/Hot-Work/Grades/H13/H13.jsx";
import H11 from "./components/Products/Hot-Work/Grades/H11/H11.jsx";
import Quality from "./components/Quality/Quality.jsx";
import Infrastructure from "./components/Infrastructure/Infrastructure.jsx";
import Certifications from "./components/Certificates/Certificates.jsx";
import EnquiryForm from "./components/Enquiry/Enquiry.jsx";
import Careers from "./components/Careers/Careers.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products/hot-work" element={<HotWork />}>
            <Route path="DB6" element={<DB6 />} />
            <Route path="H13" element={<H13 />} />
            <Route path="H11" element={<H11 />} />
            {/* <Route path="H21" element={<H21 />} /> */}
          </Route>
          {/* 
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
