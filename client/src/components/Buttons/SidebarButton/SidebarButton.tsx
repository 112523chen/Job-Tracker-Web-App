import React from "react";
import { isNotAvailable } from "../../../helper/functions";

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
  console.log("AVA", isNotAvailable(isInAddView, isInAppView));
  return (
    <StyledLink to={path}>
      <SidebarButtonBase
        isNotAvailable={isNotAvailable(isInAddView, isInAppView)}
      >
        <SidebarButtonIcon>{icon}</SidebarButtonIcon>
        <SidebarButtonText>
          <p>{text}</p>
        </SidebarButtonText>
      </SidebarButtonBase>
    </StyledLink>
  );
};

export default SidebarButton;
