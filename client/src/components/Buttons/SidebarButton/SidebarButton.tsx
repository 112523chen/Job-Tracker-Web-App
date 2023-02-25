import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  icon: React.ReactNode;
  text: string;
  path: string;
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const SidebarButtonBase = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 10%;
  margin: 0 auto 2.8125rem auto;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  box-shadow: #b3b3b3 1px 5px 0px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const SidebarButtonIcon = styled.div`
  margin-right: 0.9375rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarButtonText = styled.div`
  width: 5.625rem;
  font-size: 1.25rem;
  font-weight: 700;

  p {
    color: black;
  }
`;

const SidebarButton: React.FC<Props> = ({ icon, text, path }) => {
  return (
    <StyledLink to={path}>
      <SidebarButtonBase>
        <SidebarButtonIcon>{icon}</SidebarButtonIcon>
        <SidebarButtonText>
          <p>{text}</p>
        </SidebarButtonText>
      </SidebarButtonBase>
    </StyledLink>
  );
};

export default SidebarButton;
