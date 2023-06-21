import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SidebarButtonProps {
  isnotavailable: boolean;
}

export const StyledLink = styled(NavLink)<SidebarButtonProps>`
  color: black;
  text-decoration: none;

  &:hover {
    cursor: ${(props) => (props.isnotavailable ? "default" : "pointer")};
    background-color: ${(props) =>
      props.isnotavailable ? "" : "rgba(0, 0, 0, 0.06)"};
    color: ${(props) => (props.isnotavailable ? "" : "white")};
  }

  &.active {
    background-color: #618cf7;
  }
`;

export const SidebarButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3rem;
  margin: 0 1rem 2rem 1rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  border: 1px;
  fill: white;
  color: rgba(255, 255, 255, 0.65);
  background-color: inherit;
`;

export const SidebarButtonIcon = styled.div`
  margin-right: 0.9375rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

export const SidebarButtonText = styled.div`
  width: 5.625rem;
  font-size: 1.25rem;
  font-weight: 700;

  p {
    color: inherit;
  }
`;
