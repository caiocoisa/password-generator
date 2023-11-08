import React, { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  lowerCase: true,
  upperCase: true,
  symbols: true,
  numbers: true,
  length: 32,
  setLowerCase: (value: boolean) => {},
  setUpperCase: (value: boolean) => {},
  setSymbols: (value: boolean) => {},
  setNumbers: (value: boolean) => {},
  setLength: (value: number) => {},
});

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [length, setLength] = useState(32);

  return (
    <FilterContext.Provider
      value={{
        lowerCase,
        upperCase,
        symbols,
        numbers,
        length,
        setLowerCase,
        setUpperCase,
        setSymbols,
        setNumbers,
        setLength
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
