import React, { useContext, useState } from 'react';
const ContextProvider = React.createContext();

const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ContextProvider.Provider
      value={{
        isLoading,
        setIsLoading,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(ContextProvider);
};

export { AppContext, useGlobalContext };