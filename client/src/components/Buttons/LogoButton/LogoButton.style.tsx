import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const LogoButtonBase = styled.div`
  width: 10.8125rem;
  height: 5.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  margin: 0px auto 50px auto;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoButtonIcon = styled.svg`
  width: 50px;
  height: 50px;
  margin-right: 0.5625rem;
  fill: white;
`;

export const LogoButtonText = styled.p`
  font-size: 2.375rem;
  weight: 800;
  color: white;
`;
