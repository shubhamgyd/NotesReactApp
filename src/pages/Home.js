import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

export const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <Navbar />
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
    </>
  );
};
