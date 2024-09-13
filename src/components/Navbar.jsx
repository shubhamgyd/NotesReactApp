export const Navbar = () => {
  return (
    <>
      <header className="flex border-b-2">
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
