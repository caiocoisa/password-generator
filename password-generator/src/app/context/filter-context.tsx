import React, { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  lowerCase: true,
  upperCase: true,
  symbols: true,
  numbers: true,
  setLowerCase: (value: boolean) => {},
  setUpperCase: (value: boolean) => {},
  setSymbols: (value: boolean) => {},
  setNumbers: (value: boolean) => {},
});

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);

  return (
    <FilterContext.Provider
      value={{
        lowerCase,
        upperCase,
        symbols,
        numbers,
        setLowerCase,
        setUpperCase,
        setSymbols,
        setNumbers,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
