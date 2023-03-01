import React from "react";
import LogoButton from "../Buttons/LogoButton/LogoButton";

import SidebarButton from "../Buttons/SidebarButton/SidebarButton";
import { Main, SideBarBase } from "./Sidebar.style";
import { sidebarData } from "../../assets/data";

interface Props {
  isInAddView: boolean;
  isInAppView: boolean;
}

const Sidebar: React.FC<Props> = ({ isInAddView, isInAppView }) => {
  return (
    <SideBarBase>
      <Main>
        <LogoButton />
        <SidebarButton
          icon={sidebarData.recent.icon}
          text={sidebarData.recent.text}
          path={sidebarData.recent.path}
          isInAddView={isInAddView}
          isInAppView={isInAppView}
        />
        <SidebarButton
          icon={sidebarData.data.icon}
          text={sidebarData.data.text}
          path={sidebarData.data.path}
          isInAddView={isInAddView}
          isInAppView={isInAppView}
        />
      </Main>
    </SideBarBase>
  );
};

export default Sidebar;
