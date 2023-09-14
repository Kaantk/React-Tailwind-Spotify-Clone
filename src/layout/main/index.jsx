import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Index/Sidebar";
import { Footer } from "../Index/Footer";
import { Navbar } from "../Index/Navbar";

export const MainLayout = () => {
  return (
    <div className="text-white h-full">
      <div className="flex flex-col">
        <div className="flex flex-1 gap-2">
          <Sidebar />
          <div
            className="flex-1 bg-backgdrop rounded-md text-white overflow-y-auto overflow-x-hidden pb-4"
            style={{ maxHeight: "865px" }}
          >
            <Navbar />
            <Outlet />
          </div>
        </div>
        <div className="footer px-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};
