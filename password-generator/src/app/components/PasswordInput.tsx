/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { RefreshIcon } from "../assets/icons/RefreshIcon";
import { CopyIcon } from "../assets/icons/CopyIcon";
import useFilter from "../hooks/useFilter";
import RandExp from "randexp";
import StrengthBar from "./StrengthBar";
import { StrengthType } from "../_types/StrengthTypes";
import { PasswordStrengthCalculator } from "../_utils/strengthCalculators";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputContainer = styled.div`
  flex-direction: column;
  border-bottom: 1px solid var(--bg-dark-color);
  width: 100%;
`;
const InputWithIcons = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 40px;
  > button {
    color: inherit;
    border: none;
    cursor: pointer;
    background-color: var(--bg-light-color);
    padding: 0px 5px;

    
  }
`;
const Input = styled.input`
  background-color: var(--bg-light-color);
  color: var(--primary-text-color);
  font-size: 2rem;
  width: inherit;
  height: 37px;
`;
const InputLabel = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PasswordInput = (props: PasswordInputProps) => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(StrengthType.LOW);
  const { lowerCase, upperCase, symbols, numbers, length } = useFilter();
  
  useEffect(() => {
    generatePassword();
    checkPasswordStrength();
  }, [lowerCase, upperCase, symbols, numbers, length]);

  useEffect(() => {
    setStrength(PasswordStrengthCalculator(password));
  }, [password]);

  const generatePassword = () => {
    let rule = "";
    rule = rule.concat(lowerCase ? "a-z" : "");
    rule = rule.concat(upperCase ? "A-Z" : "");
    rule = rule.concat(symbols ? "!@#$%&" : "");
    rule = rule.concat(numbers ? "0-9" : "");
    const randexp = new RandExp(`[${rule}]{${length},${length}}`);
    setPassword(randexp.gen());
  };
  const checkPasswordStrength = () => {
    setStrength(StrengthType.LOW);
  }

  return (
    <>
    <InputContainer>
      <InputLabel>Construct a robust password and stay secure!</InputLabel>
      <InputWithIcons>
        <Input {...props} value={password} readOnly />
        <button>
          <CopyIcon />
        </button>
        <button onClick={generatePassword}>
          <RefreshIcon />
        </button>
      </InputWithIcons>
    </InputContainer>
    <StrengthBar strength={strength}/>
    </>
  );
};

export default PasswordInput;
