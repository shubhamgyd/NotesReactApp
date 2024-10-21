import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { DeletedTask } from "../components/DeletedTask";
import { useShowSidebar } from "../context/showSidebar";

export const Delete = () => {
  const {showSidebar} = useShowSidebar();
  return (
    <div className={`w-screen h-screen grid grid-cols-4 ${showSidebar ? "grid-rows-[1fr_3fr_5fr_1fr]" : "grid-rows-[1fr_8fr_1fr]"} md:grid-rows-[1fr_8fr_1fr] gap-4`}>
      {/* Navbar spans across all columns */}
      <div className="col-span-4">
        <Navbar />
      </div>
      <div className={`col-span-4 ${showSidebar ? "block" : "hidden"} md:block md:col-span-1`}>
        <Sidebar />
      </div>
      <div className="col-span-4 md:col-span-3 ">
      <DeletedTask />
      </div>

      <div className="col-span-4">
        <Footer />
      </div>
    </div>
  );
};
