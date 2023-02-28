import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const SidebarButtonBase = styled.div`
  display: flex;
  background-color: white;
  background-color: #3a87e6;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3rem;
  margin: 0 1rem 2rem 1rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  border: 1px;
  &:hover {
    cursor: pointer;
    box-shadow: #b3b3b3 1px 5px 0px;
    transform: translateY(-5px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
    scale: 0.97;
  }
`;

export const SidebarButtonIcon = styled.div`
  margin-right: 0.9375rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
`;

export const SidebarButtonText = styled.div`
  width: 5.625rem;
  font-size: 1.25rem;
  font-weight: 700;

  p {
    color: black;
    color: white;
  }
`;
