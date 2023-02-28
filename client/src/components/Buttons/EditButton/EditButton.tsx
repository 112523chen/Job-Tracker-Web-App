import React from "react";
import { EditButtonBase } from "./EditButton.style";

interface Props {
  applicationState: boolean;
  setApplicationState: React.Dispatch<React.SetStateAction<boolean>>;
  isInAppView: boolean;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditButton: React.FC<Props> = ({
  applicationState,
  setApplicationState,
  isInAppView,
  setIsInAppView,
}) => {
  const handleClick = () => {
    applicationState ? null : setApplicationState(true);
    isInAppView ? null : setIsInAppView(true);
  };

  return (
    <EditButtonBase onClick={handleClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.33333 31.6667H10.6667L25.0417 17.2917L22.7083 14.9583L8.33333 29.3333V31.6667ZM32.1667 14.875L25.0833 7.87501L27.4167 5.54168C28.0556 4.90279 28.8406 4.58334 29.7717 4.58334C30.7028 4.58334 31.4872 4.90279 32.125 5.54168L34.4583 7.87501C35.0972 8.5139 35.4306 9.28501 35.4583 10.1883C35.4861 11.0917 35.1806 11.8622 34.5417 12.5L32.1667 14.875ZM29.75 17.3333L12.0833 35H5V27.9167L22.6667 10.25L29.75 17.3333ZM23.875 16.125L22.7083 14.9583L25.0417 17.2917L23.875 16.125Z" />
      </svg>
    </EditButtonBase>
  );
};

export default EditButton;
