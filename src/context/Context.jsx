import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [newCampaign, setNewCampaign] = useState(false);

  const contextValue = { newCampaign, setNewCampaign };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
