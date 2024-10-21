import { useShowSidebar } from "../context/showSidebar";
export const Navbar = () => {
  const {setShowSidebar} = useShowSidebar();

  const handleShowSideBar = () => {
    setShowSidebar(showSidebar => !showSidebar);
  }
  return (
    <>
      <header className="flex border-b-2 items-center px-5 justify-between">
        <span class="material-symbols-outlined text-orange-500 text-5xl md:hidden" onClick={handleShowSideBar}>menu</span>
        <div className="flex px-5 py-2 gap-2">
          <div>
            <span className="material-symbols-outlined text-5xl">note_alt</span>
          </div>
          <div className="text-4xl font-bold text-orange-500">
            <h1>MegaNotes</h1>
          </div>
        </div>
      </header>
    </>
  );
};
