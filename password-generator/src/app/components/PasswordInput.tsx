"use client";
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { RefreshIcon } from "../assets/icons/RefreshIcon";
import { CopyIcon } from "../assets/icons/CopyIcon";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
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

    > svg:hover {
      transform: scale(1.2);
    }
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
  color: var(--primary-text-color);
  font-size: 1.5rem;
`;

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <InputContainer>
      <InputLabel>Crie sua senha</InputLabel>
      <InputWithIcons>
        <Input {...props} />
        <button>
          <CopyIcon />
        </button>
        <button>
          <RefreshIcon />
        </button>
      </InputWithIcons>
    </InputContainer>
  );
};

export default PasswordInput;
