import { Link } from "react-router-dom";
import styled from "styled-components";

interface SidebarButtonBaseProps {
  isNotAvailable: boolean;
}

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const SidebarButtonBase = styled.button<SidebarButtonBaseProps>`
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
  &:hover {
    cursor: ${(props) => (props.isNotAvailable ? "default" : "pointer")};
    background-color: ${(props) =>
      props.isNotAvailable ? "" : "rgba(0, 0, 0, 0.06)"};
    color: ${(props) => (props.isNotAvailable ? "" : "white")};
  }
  &:active {
  }
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
