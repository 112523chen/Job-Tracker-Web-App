import React from "react";
import LogoButton from "../Buttons/LogoButton/LogoButton";
import styled from "styled-components";
import SidebarButton from "../Buttons/SidebarButton/SidebarButton";
import AddButton from "../Buttons/AddButton/AddButton";

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const SideBarBase = styled.div`
  min-width: 15%;
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
`;

const Main = styled.div`
  height: 100%;
`;

const Action = styled.div`
  margin-bottom: 2.5rem;
`;

const sidebarData = {
  recent: {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.98 0C8.94 0 0 8.96 0 20C0 31.04 8.94 40 19.98 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 19.98 0ZM26.58 29.42L18 20.82V10H22V19.18L29.42 26.6L26.58 29.42Z"
          fill="black"
        />
      </svg>
    ),
    text: "Recents",
    path: "/recent",
  },
  data: {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.8 26L14.9 19.9L18.9 23.9L26 16.85V20H30V10H20V14H23.15L18.9 18.25L14.9 14.25L6 23.2L8.8 26ZM4 36C2.9 36 1.958 35.6087 1.174 34.826C0.391333 34.042 0 33.1 0 32V4C0 2.9 0.391333 1.958 1.174 1.174C1.958 0.391333 2.9 0 4 0H32C33.1 0 34.042 0.391333 34.826 1.174C35.6087 1.958 36 2.9 36 4V32C36 33.1 35.6087 34.042 34.826 34.826C34.042 35.6087 33.1 36 32 36H4Z"
          fill="black"
        />
      </svg>
    ),
    text: "Analytics",
    path: "/analytics",
  },
};

const Sidebar: React.FC<Props> = ({ setIsInAddView, isInAddView }) => {
  return (
    <SideBarBase>
      <Main>
        <LogoButton />
        <SidebarButton
          icon={sidebarData.recent.icon}
          text={sidebarData.recent.text}
          path={sidebarData.recent.path}
        />
        <SidebarButton
          icon={sidebarData.data.icon}
          text={sidebarData.data.text}
          path={sidebarData.data.path}
        />
      </Main>
      <Action>
        <AddButton isInAddView={isInAddView} setIsInAddView={setIsInAddView} />
      </Action>
    </SideBarBase>
  );
};

export default Sidebar;
