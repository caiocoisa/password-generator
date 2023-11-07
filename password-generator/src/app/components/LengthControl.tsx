import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import useFilter from "../hooks/useFilter";

interface LengthInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const LengthControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const LengthInput = styled.input`
  margin: 0px 16px;
  padding: 3px;
  width: 4rem;
  height: 40px;
  font-size: 25px;
  color: var(--primary-text-color);
  border-radius: 50px;
  text-align: center;
  background-color: white;
`;
const LengthButton = styled.button`
  display: inherit;
  align-items: center;
  justify-content: center;
  border: none;
  color: var(--primary-text-color);
  font-size: 3rem;
  background-color: var(--bg-light-color);
  cursor: pointer;
`;

const LengthControl = (props: LengthInputProps) => {
  const {length, setLength} = useFilter();

  const plusLength = () => {
    length < 64 ? setLength(length+1):"";
  };
  const minusLength = () => {
    length > 4 ? setLength(length-1):"";
  };
  const handleChangeLength = (ev: any) => {
    const newLength = ev.target.value;
    newLength > 3 && newLength < 65 ? setLength(newLength) : setLength(4);
  }

  return (
    <LengthControlContainer>
      <LengthButton onClick={minusLength}><p>-</p></LengthButton>
      <LengthInput value={length} onChange={(ev: any)=>{handleChangeLength(ev)}}></LengthInput>
      <LengthButton onClick={plusLength}><p>+</p></LengthButton>
    </LengthControlContainer>
  );
};

export default LengthControl;
