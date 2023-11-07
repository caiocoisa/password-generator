import React from "react";
import styled from "styled-components";
import { SquareIcon } from "../assets/icons/SquareIcon";
import useFilter from "../hooks/useFilter";
import { CheckedIcon } from "../assets/icons/CheckedIcon";
import LengthControl from "./LengthControl";

const FilterPanelContainer = styled.div`
  flex-direction: column;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  height: 100px;
`;

const RadioButtonBar = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
    font-family: inherit;
    color: var(--primary-text-color);
    cursor: pointer;
    svg {
      margin-right: 16px;
    }
  }
`;

const FilterPanel = () => {
  const {
    lowerCase,
    upperCase,
    symbols,
    numbers,
    setLowerCase,
    setUpperCase,
    setSymbols,
    setNumbers,
  } = useFilter();
  const handleOnClick = () => {};
  return (
    <FilterPanelContainer>
      <LengthControl value="12" />
      <RadioButtonBar>
        <button onClick={() => setLowerCase(!lowerCase)}>
          {lowerCase ? <CheckedIcon /> : <SquareIcon />}
          <p>Lower Case</p>
        </button>
        <button onClick={() => setUpperCase(!upperCase)}>
          {upperCase ? <CheckedIcon /> : <SquareIcon />}
          <p>Upper Case</p>
        </button>
        <button onClick={() => setSymbols(!symbols)}>
          {symbols ? <CheckedIcon /> : <SquareIcon />}
          <p>Symbols</p>
        </button>
        <button onClick={() => setNumbers(!numbers)}>
          {numbers ? <CheckedIcon /> : <SquareIcon />}
          <p>Numbers {numbers}</p>
        </button>
      </RadioButtonBar>
    </FilterPanelContainer>
  );
};

export default FilterPanel;
