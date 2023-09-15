import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "~/layout/main/Sidebar";
import { Footer } from "~/layout/main/Footer";
import { Navbar } from "~/layout/main/Navbar";
import { useSelector } from "react-redux";
import { Collection } from "~/layout/main/Collection";

export const MainLayout = () => {
  const isView = useSelector((state) => state.collection.isView);

  return (
    <div className="text-white h-full pt-2 pl-2 pr-2">
      <div className="flex flex-col">
        <div className="flex flex-1 gap-2">
          {isView ? <Collection /> : <Sidebar />}
          <div className="flex-1 bg-backgdrop rounded-md text-white overflow-y-auto overflow-x-hidden pb-4 max-h-[865px]">
            <Navbar />
            <div className="pl-5 pr-8 flex flex-col gap-y-8">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="footer px-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};
