import React from "react";
import { isAvailable } from "../../../helper/functions";

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
  isInAppView: boolean;
}

const SidebarButton: React.FC<Props> = ({
  icon,
  text,
  path,
  isInAddView,
  isInAppView,
}) => {
  return (
    <StyledLink to={isAvailable(isInAddView, isInAppView) ? "" : path}>
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
