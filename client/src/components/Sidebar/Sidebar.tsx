import React from "react";
import LogoButton from "../Buttons/LogoButton/LogoButton";

import SidebarButton from "../Buttons/SidebarButton/SidebarButton";
import { Main, SideBarBase } from "./Sidebar.style";
import { sidebarData } from "../../assets/data";

interface Props {
  isInAddView: boolean;
}

const Sidebar: React.FC<Props> = ({ isInAddView }) => {
  return (
    <SideBarBase>
      <Main>
        <LogoButton />
        <SidebarButton
          icon={sidebarData.recent.icon}
          text={sidebarData.recent.text}
          path={sidebarData.recent.path}
          isInAddView={isInAddView}
        />
        <SidebarButton
          icon={sidebarData.data.icon}
          text={sidebarData.data.text}
          path={sidebarData.data.path}
          isInAddView={isInAddView}
        />
      </Main>
    </SideBarBase>
  );
};

export default Sidebar;
