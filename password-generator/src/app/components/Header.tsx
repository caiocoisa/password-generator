"use client";
import React from "react";
import styled from "styled-components";

const TitleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px 160px;
  background-color: var(--bg-light-color);
`;

const Title = styled.a`
  color: var(--primary-text-color);
  font-size: 40px;
  text-align: left;
`;

const Header = () => {
  return (
    <TitleHeader>
      <Title>Password Generator</Title>
    </TitleHeader>
  );
};

export default Header;
