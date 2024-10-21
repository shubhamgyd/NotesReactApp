import { useContext, createContext } from "react";
import { useState } from "react";

const showSidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <showSidebarContext.Provider value={{showSidebar, setShowSidebar}}>
      {children}
    </showSidebarContext.Provider>
  )
}

const useShowSidebar = () => useContext(showSidebarContext);

export {SidebarProvider, useShowSidebar}