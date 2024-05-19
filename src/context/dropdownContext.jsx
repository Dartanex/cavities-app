import { createContext, useState, useContext } from 'react';

// Create a Context
const DropdownContext = createContext();

// Custom hook to use the DropdownContext
export const useDropdownContext = () => {
  return useContext(DropdownContext);
};

// Provider component to manage the state
// eslint-disable-next-line react/prop-types
export const DropdownProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  // eslint-disable-next-line no-unused-vars
  const toggleDropdown = (id) => {
    setIsDropdownOpen((pervState) => ({
        ...pervState,
        [id]: !pervState[id],
    }));
  };

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};