import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AOSInit } from "../../libs/aos";

const RootLayout = () => {
  return (
    <div className="px-5 lg:px-52 w-full bg-[#15202b]">
      <AOSInit />
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
