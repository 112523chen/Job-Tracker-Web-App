import React from "react";
import { AddButtonBase } from "./AddButton.style";

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
  isInAppView: boolean;
}

const AddButton: React.FC<Props> = ({
  setIsInAddView,
  isInAddView,
  isInAppView,
}) => {
  const handleClick = (): void => {
    setIsInAddView(isInAddView === false ? true : false);
  };

  console.log(isInAppView);

  return (
    <AddButtonBase
      onClick={handleClick}
      disabled={isInAppView}
      isInAppView={isInAppView}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" />
      </svg>
    </AddButtonBase>
  );
};

export default AddButton;
