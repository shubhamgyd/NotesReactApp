import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const style =
      "flex items-center gap-x-1.5 px-2 py-1 text-[1.5rem] font-medium rounded-e-full text-center max-sm:text-left max-sm:text-[3rem]";
    return isActive
      ? `bg-orange-600 text-slate-50 ${style}`
      : `${style} hover:bg-orange-600 hover:rounded-e-full hover:text-slate-50`;
  };
  let smallScreen = "sm:text-left sm:w-390 sm:text-3";
  return (
    <aside className="flex flex-col lg:w-60 md:w-60 text-center sm:text-left h-screen border-r-2">
      <NavLink to="/" className={getStyles}>
        <span className="material-symbols-outlined text-[2rem] max-sm:text-[3rem]">
          home
        </span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles}>
        <span className="material-symbols-outlined text-[2rem] max-sm:text-[3rem]">
          archive
        </span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <span className="material-symbols-outlined text-[2rem] max-sm:text-[3rem]">
          stars
        </span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <span className="material-symbols-outlined text-[2rem] max-sm:text-[3rem]">
          delete
        </span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
