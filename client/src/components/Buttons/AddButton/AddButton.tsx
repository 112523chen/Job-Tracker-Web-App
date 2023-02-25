import React from "react";
import { AddButtonBase } from "./AddButton.style";

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const AddButton: React.FC<Props> = ({ setIsInAddView, isInAddView }) => {
  const handleClick = (): void => {
    setIsInAddView(isInAddView === false ? true : false);
  };
  return (
    <AddButtonBase onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="black" />
      </svg>
    </AddButtonBase>
  );
};

export default AddButton;
