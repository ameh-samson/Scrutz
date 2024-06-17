import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const contextValue = {};
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
