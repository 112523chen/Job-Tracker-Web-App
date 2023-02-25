import React from "react";
import styled from "styled-components";

interface Props {
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const AddButtonBase = styled.button`
  background-color: #103056;
  border-radius: 20px;
  width: 9.375rem;
  height: 4.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  color: white;
  padding: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const AddButtonText = styled.div`
  /* margin-right: 0.3rem; */
`;

const AddButtonKey = styled.div`
  kbd {
    width: fit-content;
    background-color: silver;
    border: 0;
    padding: 0 3px 2px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
      0 1px 2px 1px rgba(30, 35, 90, 0.4);
  }
`;

const AddButton: React.FC<Props> = ({ isInAddView, setIsInAddView }) => {
  const handleClick = (): void => {
    setIsInAddView(isInAddView === false ? true : false);
  };
  return (
    <AddButtonBase onClick={handleClick}>
      <AddButtonText>Add Job</AddButtonText>
      <AddButtonKey>
        <kbd>⌥J</kbd>
      </AddButtonKey>
    </AddButtonBase>
  );
};

export default AddButton;
