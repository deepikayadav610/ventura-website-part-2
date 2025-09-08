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
// HotWork
import HotWork from "./components/Products/Hot-Work/hot-work.jsx";
import DB6 from "./components/Products/Hot-Work/Grades/DB6/DB6.jsx";
import H13 from "./components/Products/Hot-Work/Grades/H13/H13.jsx";
import H11 from "./components/Products/Hot-Work/Grades/H11/H11.jsx";
import H21 from "./components/Products/Hot-Work/Grades/H21/H21.jsx";
import H10 from "./components/Products/Hot-Work/Grades/H10/H10.jsx";
import H12 from "./components/Products/Hot-Work/Grades/H12/H12.jsx";

// Boron
import Boron from "./components/Products/Boron-Steel/boron-steel.jsx";
import Boron15B25 from "./components/Products/Boron-Steel/Grades/15B25/15B25.jsx";
import Boron10B21 from "./components/Products/Boron-Steel/Grades/10B21/10B21.jsx";
import Boron10B35 from "./components/Products/Boron-Steel/Grades/10B35/10B35.jsx";

// ColdWork
import ColdWork from "./components/Products/Cold-Work/cold-work.jsx";
import D2 from "./components/Products/Cold-Work/Grades/D2/D2.jsx";
import D3 from "./components/Products/Cold-Work/Grades/D3/D3.jsx";
import D5 from "./components/Products/Cold-Work/Grades/D5/D5.jsx";
import A2 from "./components/Products/Cold-Work/Grades/A2/A2.jsx";
import O1 from "./components/Products/Cold-Work/Grades/O1/O1.jsx";

import Quality from "./components/Quality/Quality.jsx";
import Infrastructure from "./components/Infrastructure/Infrastructure.jsx";
import Certifications from "./components/Certificates/Certificates.jsx";
import EnquiryForm from "./components/Enquiry/Enquiry.jsx";
import Careers from "./components/Careers/Careers.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Automotive from "./components/Industries/Automative/Automative.jsx";
import Aerospace from "./components/Industries/Aerospace/Aerospace.jsx";
import Tooling from "./components/Industries/Tooling/Tooling.jsx";
import InfrastructureEnergy from "./components/Industries/Infrastructure/Infrastructure-energy.jsx";
import Plastics from "./components/Industries/Plastics/Plastics.jsx";

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
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/products/hot-work" element={<HotWork />}>
            <Route path="DB6" element={<DB6 />} />
            <Route path="H13" element={<H13 />} />
            <Route path="H11" element={<H11 />} />
            <Route path="H21" element={<H21 />} />
            <Route path="H10" element={<H10 />} />
            <Route path="H12" element={<H12 />} />
          </Route>
          <Route path="/products/cold-work" element={<ColdWork />}>
            <Route path="D2" element={<D2 />} />
            <Route path="D3" element={<D3 />} />
            <Route path="D5" element={<D5 />} />
            <Route path="A2" element={<A2 />} />
            <Route path="O1" element={<O1 />} />
          </Route>
          <Route path="/products/boron-steel" element={<Boron />}>
            <Route path="10B21" element={<Boron10B21 />} />
            <Route path="15B25" element={<Boron15B25 />} />
            <Route path="10B35" element={<Boron10B35 />} />
          </Route>
          <Route path="/products/automotive" element={<Automotive />} />
          <Route path="/products/aerospace" element={<Aerospace />} />
          <Route path="/products/tooling" element={<Tooling />} />
          <Route
            path="/products/infrastructure-energy"
            element={<InfrastructureEnergy />}
          />
          <Route path="/products/plastics" element={<Plastics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
