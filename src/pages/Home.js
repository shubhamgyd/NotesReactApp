import { Content } from "../components/Content";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { useShowSidebar } from "../context/showSidebar";

export const Home = () => {
  const {showSidebar} = useShowSidebar();
  return (
    <div className={`w-screen h-screen grid grid-cols-4 ${showSidebar ? "grid-rows-[1fr_3fr_5fr_1fr]" : "grid-rows-[1fr_8fr_1fr]"} md:grid-rows-[1fr_8fr_1fr] gap-4`}>
      {/* Navbar spans across all columns */}
      <div className="col-span-4">
        <Navbar />
      </div>

      {/* Sidebar on the left in the first column */}
      <div className={`col-span-4 ${showSidebar ? "block" : "hidden"} md:block md:col-span-1`}>
        <Sidebar />
      </div>

      {/* Content spans across remaining columns */}
      <div className="col-span-4 md:col-span-3 ">
        <Content />
      </div>

      {/* Footer spans across all columns */}
      <div className="col-span-4">
        <Footer />
      </div>
    </div>
  );
};
