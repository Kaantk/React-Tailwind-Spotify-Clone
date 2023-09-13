import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/layout/Index/Footer";
import { Sidebar } from "~/layout/Index/Sidebar";
import { Collection } from "~/layout/Index/Collection";
import { Home } from "~/layout/Index/Home";
import { Search } from "~/layout/Index/Search";

export const Index = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="text-white h-full">
      <div className="flex flex-col">
        <div className="flex flex-1 gap-2">
          <Sidebar />
          <div className="flex-1 bg-backgdrop rounded-md px-5 py-3 text-white">
            <Navbar />
            {location.pathname === "/home" && <Home />}
            {location.pathname === "/search" && <Search />}
            {location.pathname === "/collection" && <Collection />}
          </div>
        </div>
        <div className="footer px-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};
