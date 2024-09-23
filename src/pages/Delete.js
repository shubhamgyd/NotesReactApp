import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { DeletedTask } from "../components/DeletedTask";

export const Delete = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="homepageContainer">
      <div className="navbar">
        <Navbar />
      </div>
      <button className="mobile:hidden" onClick={toggleSidebar}>
        <span className="material-symbols-outlined text-[2rem]">
          {isSideBarOpen ? "close" : "menu"}
        </span>
      </button>
      <div className="max-mobile:block mobile:hidden">
        {isSideBarOpen && <Sidebar />}
      </div>
      <div className="hidden mobile:block">
        <Sidebar />
      </div>

      <DeletedTask />

      <Footer />
    </div>
  );
};
