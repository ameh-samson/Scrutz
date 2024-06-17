import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  // set link state

  const handleIsLinkActive = () => {
    setIsLinkActive(!isLinkActive);
  };

  const contextValue = { isLinkActive, handleIsLinkActive };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
