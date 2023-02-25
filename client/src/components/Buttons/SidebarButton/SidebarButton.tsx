import React from "react";

import {
  SidebarButtonBase,
  SidebarButtonIcon,
  SidebarButtonText,
  StyledLink,
} from "./SidebarButton.style";

interface Props {
  icon: React.ReactNode;
  text: string;
  path: string;
  isInAddView: boolean;
}

const SidebarButton: React.FC<Props> = ({ icon, text, path, isInAddView }) => {
  console.log(isInAddView);
  return (
    <StyledLink to={isInAddView ? "" : path}>
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
