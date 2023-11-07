"use client";
import React from "react";
import styled from "styled-components";
import { ShieldCheckIcon } from "../assets/icons/ShieldCheckIcon";
import { ShieldAlertIcon } from "../assets/icons/ShieldAlertIcon";
import { ShieldOffIcon } from "../assets/icons/ShieldOffIcon";
import { StrengthType } from "../_types/StrengthTypes";

interface StrengthBarProps {
  strength: StrengthType;
}

const StrengthBarContainer = styled.div<{ $strength?: StrengthType; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 2.5rem;
  margin: 5px 0px;
  font-size: 1.3rem;
  color: var(--primary-dark-text-color);
  border-radius: 50px;
  background-color: ${(props) =>
    props.$strength === StrengthType.HIGH
    ? "var(--high-strength-color)"
    : props.$strength === StrengthType.MEDIUM
    ? "var(--medium-strength-color)"
    : "var(--low-strength-color)"};
  > svg {
    margin-right: 10px;
  }
`;
const StrengthBar = (props: StrengthBarProps) => {
  return (
    <StrengthBarContainer $strength={props.strength}>
      {props.strength === StrengthType.HIGH && <ShieldCheckIcon />}
      {props.strength === StrengthType.MEDIUM && <ShieldAlertIcon />}
      {props.strength === StrengthType.LOW && <ShieldOffIcon />}
      <p> {props.strength}</p>
    </StrengthBarContainer>
  );
};

export default StrengthBar;
